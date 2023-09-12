"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import Bubbles from "@/components/Bubbles";
import Loader from "@/components/Loader";

const supabase = createClient(
  "https://oxymbvreiartsmdbjsyk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94eW1idnJlaWFydHNtZGJqc3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDkwNDAsImV4cCI6MjAxMDAyNTA0MH0.r5cV6YCcOAJFJo2ZoeWpi5PxiPraSL9ccZAEmqwsXns"
);

const RetrievePage = () => {
  const [imageURL, setImageURL] = useState("");
  const [csvData, setCSVData] = useState([]);
  const [loaderdiv, toggleLoaderDiv] = useState(false);
  const [showImage, setShowImage] = useState(false); // Toggle for image section
  const [showCSV, setShowCSV] = useState(false); // Toggle for CSV section
  const [cidInput, setCIDInput] = useState("");

  console.log(imageURL);

  const fetchCSVData = async (cid) => {
    try {
      const { data, error } = await supabase.storage
        .from("ipfs-upload-docs")
        .download(cid);

      if (error) {
        console.error("Error fetching CSV data:", error);
      } else {
        // Read the Blob data as text
        const textData = await data.text();

        // Parse the CSV data (assuming it's a string)
        const parsedData = parseCSVDataToStringArray(textData);
        setCSVData(parsedData);
        setShowCSV(true);

        // Hide the image section
        setShowImage(false);
      }
    } catch (error) {
      console.error("Error fetching and displaying CSV data:", error);
    }
  };

  const fetchImage = async (cid) => {
    try {
      const { data, error } = await supabase.storage
        .from("ipfs-upload-docs")
        .download(cid);

      if (error) {
        console.error("Error fetching image:", error);
      } else {
        // Convert the retrieved image data to a URL
        const url = URL.createObjectURL(data);
        setImageURL(url);
         setShowImage(true);

         // Hide the CSV section
         setShowCSV(false);
      }
    } catch (error) {
      console.error("Error fetching and displaying image:", error);
    }
  };

  const parseCSVDataToStringArray = (csvString) => {
    // Split the CSV string into rows
    const rows = csvString.split("\n");

    // Parse each row into an array of values
    const parsedData = rows.map((row) => {
      return row.split(",");
    });

    return parsedData;
  };

  const handleRetrieveCSVData = () => {

    // Fetch and display the CSV data when the button is clicked
    fetchCSVData(cidInput);
  };

  const handleCIDInputChange = (e) => {
    setCIDInput(e.target.value);
  };

  const handleRetrieveImage = () => {
    // Fetch and display the image when the button is clicked
    fetchImage(cidInput);
  };

  const handleRetrieveData = () => {
    // Get the file extension from the CID or filename
    toggleLoaderDiv(true);
    const fileExtension = getFileExtension(cidInput);

    if (fileExtension === "csv") {
      handleRetrieveCSVData();
    } else if (
      fileExtension === "jpg" ||
      fileExtension === "png" ||
      fileExtension === "jpeg"
    ) {
      handleRetrieveImage();
    } else {
      // Handle other document types or show an error message
      console.error("Unsupported document type:", fileExtension);
    }
  };

  // Function to get file extension from a string (e.g., "filename.csv" -> "csv")
  const getFileExtension = (filename) => {
    const parts = filename.split(".");
    if (parts.length > 1) {
      return parts[parts.length - 1].toLowerCase();
    }
    return "";
  };

  const getRandomDelay = () => {
    return Math.random() * 2000 + "ms";
  };

  return (
    <div className="flex justify-center flex-col relative">
      <Bubbles />
      <div className="flex justify-center">
        <input
          className="px-10 py-2 w-[500px] mr-6  border-black border-2 rounded-full"
          type="text"
          placeholder="Enter CID here"
          value={cidInput}
          onChange={handleCIDInputChange}
        />
        <button
          onClick={handleRetrieveData}
          className="bg-[#4F86E7] py-1 px-3 text-white rounded-lg"
        >
          Retrieve Data
        </button>
      </div>
      <br />

      {showImage && (
        <>
          <p className="text-7xl text-center text-[#212121] font-semibold mt-2 tracking-wide mb-5">Retrieved Image</p>
          <div className="flex justify-center">
            {imageURL ? (
              <Image src={imageURL} className="z-10" width={800} height={800} />
            ) : (
              <Loader />
            )}
          </div>
        </>
      )}

      {showCSV && (
        <>
          <p className="text-7xl text-center text-[#212121] font-semibold mt-2 tracking-wide">
            Retrieved CSV
          </p>
          <div className="px-10 mt-10 z-10">
            {csvData && csvData.length > 0 ? (
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    {csvData[0].map((cell, cellIndex) => (
                      <th
                        key={cellIndex}
                        className="bg-gray-100 border-b border-gray-200 text-gray-600 font-bold uppercase text-sm px-6 py-3"
                      >
                        {cell}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {csvData.slice(1).map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className="border-b border-gray-200 text-sm px-6 py-4 bg-white"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <Loader />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default RetrievePage;
