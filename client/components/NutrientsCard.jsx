import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Bubbles from "@/components/Bubbles";
import Loader from "@/components/Loader";

const NutrientsCard = () => {
  const [path, setPath] = useState("Loading...");
  const [loaderdiv, toggleLoaderDiv] = useState(false);
  const [selectedFoodType, setSelectedFoodType] = useState("");

  // Define a function to handle the change in the dropdown selection

  useEffect(() => {}, [path]);
  const [formData, setFormData] = useState({
    foodType: "",
    waterContent: 0.0,
    vitaminAQuantity: 0.0,
    vitaminBQuantity: 0.0,
    vitaminCQuantity: 0.0,
    vitaminDQuantity: 0.0,
    alcoholContent: 0.0,
    ironContent: 0.0,
    fatContent: 0.0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toggleLoaderDiv(true);

    // Prepare the data to be sent to the server
    const requestData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };

    // Make a POST request to the Flask server
    fetch("http://localhost:8080/diagnose", requestData)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Handle the response from the server if needed
        const actualpath = data.path;
        setPath(actualpath);
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  return (
    <div className="flex justify-between ">
      <div>
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex justify-between h-[390px] flex-col">
            <p className="text-7xl text-center text-[#212121] font-semibold mt-32 tracking-wide">
              Nutrient Analysis
            </p>
            <div className="mb-4">
              <label
                htmlFor="foodType"
                className="block font-medium text-gray-700 text-center"
              >
                Type of Food
              </label>
              <select
                id="foodType"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              >
                <option value="">Select a food type</option>
                <option value="1">Grains</option>
                <option value="2">Nuts</option>
                <option value="3">Vegetables</option>
                <option value="4">Fruits</option>
              </select>
            </div>
          </div>

          <div
            className="relative inline-block"
            style={{ position: "relative" }}
          >
            <button
              type="submit"
              className="bg-[#4F86E7] text-white font-semibold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center">
        {loaderdiv && (
          <div className="flex flex-col justify-center mt-10 mb-10 border-2 border-dotted border-black p-4">
            {path === "Loading..." ? (
              <Loader />
            ) : (
              <>
                {path && (
                  <Image
                    src={`/${path}`}
                    width={700}
                    height={700}
                    alt="Your report will be displayed here..."
                  />
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NutrientsCard;
