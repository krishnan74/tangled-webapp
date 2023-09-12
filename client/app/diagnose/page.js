"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Bubbles from "@/components/Bubbles";
import Loader from "@/components/Loader";

const DiagnosePage = () => {
  const [path, setPath] = useState("Loading...");
  const [loaderdiv, toggleLoaderDiv] = useState(false); 
  const [selectedFoodType, setSelectedFoodType] = useState("");
  const [buttonStyle, setButtonStyle] = useState({
    left: 0,
    top: 0,
  });

  const handleMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    // Calculate the new position for the button
    const newX = x - 20; // Adjust this value to control the offset
    const newY = y - 10; // Adjust this value to control the offset

    // Update the button's style
    setButtonStyle({
      left: `${newX}px`,
      top: `${newY}px`,
    });
  };

  function myFunction(e) {
    let x = e.clientX;
    let y = e.clientY;
  }

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

  const download_report = () => {
    if (path) {
      // Create an anchor element
      const link = document.createElement("a");
      link.href = path;
      link.download = "nutrition_report.pdf"; // You can specify the desired filename here
      link.target = "_blank"; // Open the link in a new tab
      document.body.appendChild(link);

      // Trigger a click event on the anchor element
      link.click();

      // Remove the anchor element from the DOM
      document.body.removeChild(link);
    } else {
      // Handle the case where 'path' is empty or report is not available
      alert("Report is not available for download.");
    }
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
    <div>
      <div className="flex justify-center">
        <form method="post" onSubmit={handleSubmit}>
          <div className="flex justify-center">
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
          <div className="flex ">
            {/* <div className="mb-4">
              <label
                htmlFor="waterContent"
                className="block font-medium text-gray-700"
              >
                Water Content (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="waterContent"
                name="waterContent"
                value={formData.waterContent}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="vitaminAQuantity"
                className="block font-medium text-gray-700"
              >
                Vitamin A Quantity (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="vitaminAQuantity"
                name="vitaminAQuantity"
                value={formData.vitaminAQuantity}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="vitaminBQuantity"
                className="block font-medium text-gray-700"
              >
                Vitamin B Quantity (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="vitaminBQuantity"
                name="vitaminBQuantity"
                value={formData.vitaminBQuantity}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="vitaminCQuantity"
                className="block font-medium text-gray-700"
              >
                Vitamin C Quantity (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="vitaminCQuantity"
                name="vitaminCQuantity"
                value={formData.vitaminCQuantity}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
          </div>

          <div className="flex">
            {/* <div className="mb-4">
              <label
                htmlFor="vitaminDQuantity"
                className="block font-medium text-gray-700"
              >
                Vitamin D Quantity (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="vitaminDQuantity"
                name="vitaminDQuantity"
                value={formData.vitaminDQuantity}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="alcoholContent"
                className="block font-medium text-gray-700"
              >
                Alcohol Content (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="alcoholContent"
                name="alcoholContent"
                value={formData.alcoholContent}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="ironContent"
                className="block font-medium text-gray-700"
              >
                Iron Content (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="ironContent"
                name="ironContent"
                value={formData.ironContent}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
            {/* <div className="mb-4">
              <label
                htmlFor="fatContent"
                className="block font-medium text-gray-700"
              >
                Fat Content (mg)
              </label>
              <input
                type="number"
                step="0.01"
                id="fatContent"
                name="fatContent"
                value={formData.fatContent}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div> */}
          </div>
          <div
            onMouseMove={handleMouseMove}
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
        { loaderdiv &&
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
        }
      </div>
    </div>
  );
};

export default DiagnosePage;
