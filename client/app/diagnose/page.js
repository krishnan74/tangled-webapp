"use client"
import React, { useState, useEffect } from "react";

const DiagnosePage = () => {
  const [result, setResult] = useState("Nothing");

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
        setResult(data.result)
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
              <input
                type="text"
                id="foodType"
                name="foodType"
                value={formData.foodType}
                onChange={handleChange}
                className="mt-1 p-2 border rounded-md w-full"
                required
              />
            </div>
          </div>
          <div className="flex ">
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
          </div>

          <div className="flex">
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
            <div className="mb-4">
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
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#4F86E7] text-white font-semibold py-2 px-4 rounded-full"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="flex justify-center mt-10">
        Based on the selected food type, the missing or very low nutrient may be
         {result}
      </div>
    </div>
  );
};

export default DiagnosePage;
