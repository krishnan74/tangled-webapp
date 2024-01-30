"use client";
import React, { useState } from "react";

import Loader from "@/components/Loader";

const ChatPage = () => {
  const [formData, setFormData] = useState({
    prompt: "",
  });

  const [chatBotResponse, setChatBotResponse] = useState("");
  const [loaderdiv, toggleLoaderDiv] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

    setChatBotResponse("");
    e.preventDefault();

    try {
      // Prepare the data to be sent to the server
      const requestData = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      };

      // Make a POST request to the Flask server
      const response = await fetch(
        "http://localhost:8080/chatbot",
        requestData
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();

      console.log(data);
      // Handle the response from the server if needed
      setChatBotResponse(data.text);
      console.log("Server response:", chatBotResponse);
    } catch (error) {
      console.error("Error sending data to server:", error.message);
    
    }
  };

  return (
    <div className="px-[100px]">
      <form method="post" onSubmit={handleSubmit}>
        <div className="flex justify-center gap-5 h-[300px] flex-col ">
          <p className="text-7xl text-center text-[#212121] font-semibold tracking-wide">
            Wikipedia ChatBot
          </p>
          <div className="flex justify-center">
            <div className="mb-4 w-[800px]">
              <input
                type="text"
                placeholder="what do you want to know?..."
                id="prompt"
                name="prompt"
                value={formData.prompt}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full shadow-md px-4"
                required
              ></input>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#4F86E7] text-white font-semibold py-2 px-4 rounded-full shadow-lg"
              onClick={() => toggleLoaderDiv(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </form>

      <div>
        {loaderdiv && (
          <div className="flex flex-col justify-center  border rounded-lg border-black mb-10 shadow-xl">
            {chatBotResponse === "" ? (
              <div className="flex justify-center">
                <Loader />
              </div>
            ) : (
              <p className="text-lg  text-[#212121]  tracking-wide px-10 py-10">
                {chatBotResponse}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
