import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Bubbles from "@/components/Bubbles";
import Loader from "@/components/Loader";

const LSFWCard = () => {
  const [path, setPath] = useState("Loading...");
  const [loaderdiv, toggleLoaderDiv] = useState(false);
  const [LSFWformData, setLSFWFormData] = useState({
    systolic_volume: 0.0,
    diastolic_volume: 0.0,
    age: 0.0,
    gender: "",
    diabetes: "",
    hypertension: "",
    smoking: "",
  });

  useEffect(() => {}, [path]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLSFWFormData({ ...LSFWformData, [name]: value });
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
      body: JSON.stringify(LSFWformData),
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
        const actualpath = data.file;
        setPath(actualpath);
        console.log("Server response:", data);
      })
      .catch((error) => {
        console.error("Error sending data to server:", error);
      });
  };

  const handleSubmitDemo = (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    toggleLoaderDiv(true);  


    // Wait for two seconds (2000 milliseconds) before executing the setPath function
    setTimeout(() => {
      setPath("heart_failure_report.pdf");
    }, 2000);
  };

  const downloadPdf = () => {
    // Construct the URL to the PDF file in the public directory
    const pdfUrl = "/"+path;

    // Create a temporary link element to trigger the download
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "heart_failure_report.pdf";

    // Trigger the click event to start the download
    link.click();

    // Clean up the temporary link element
    link.remove();
  };

  return (
    <div>
      <p className="text-7xl text-center text-[#212121] font-semibold mb-12 mt-10 tracking-wide">
        LVEF
      </p>
      <div className="flex justify-center flex-wrap w-[600px]">
        <div className="mb-4 px-3 flex-col ">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Systemic Volume
          </label>
          <input
            id="foodType"
            type="number"
            name="systolic_volume"
            value={LSFWformData.systolic_volume}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Diastolic Volume
          </label>
          <input
            id="foodType"
            type="number"
            name="diastolic_volume"
            value={LSFWformData.diastolic_volume}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Age
          </label>
          <input
            id="foodType"
            type="number"
            name="age"
            value={LSFWformData.age}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md  w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Gender
          </label>
          <input
            id="foodType"
            type="text"
            name="gender"
            value={LSFWformData.gender}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Diabetes
          </label>
          <input
            id="foodType"
            type="text"
            name="diabetes"
            value={LSFWformData.diabetes}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Hypertension
          </label>
          <input
            id="foodType"
            type="text"
            name="hypertension"
            value={LSFWformData.hypertension}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>

        <div className="mb-4 px-3">
          <label
            htmlFor="foodType"
            className="block font-medium text-gray-700 text-center"
          >
            Smoking
          </label>
          <input
            id="foodType"
            type="text"
            name="smoking"
            value={LSFWformData.smoking}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          ></input>
        </div>
      </div>

      <div className="relative inline-block" style={{ position: "relative" }}>
        <button
          onClick={handleSubmitDemo}
          className="bg-[#4F86E7] text-white font-semibold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </div>

      <div className="flex justify-center">
        {loaderdiv && (
          <div className="flex flex-col justify-center mt-10 mb-10 border-2 border-dotted border-black p-4">
            {path === "Loading..." ? (
              <Loader />
            ) : (
              <>
                <button onClick={downloadPdf}>Download PDF report</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LSFWCard;
