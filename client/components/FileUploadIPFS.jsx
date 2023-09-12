"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Web3Storage } from "web3.storage";
import { createClient } from "@supabase/supabase-js";
import Bubbles from "./Bubbles";

import Web3 from "web3";
import ContractABI from "../app/web3/contracts/ContractABI.json"; // Replace with your ABI path
import ContractAddress from "../app/web3/contracts/ContractAddress.json"; // Replace with your address path

const web3StorageClient = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRBQkI4YTdhNEM4QkVCQTJhM0U5M0VmQTNiMGI0MzcwRWY0ODU5OTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ0MTgxMjQ5MTIsIm5hbWUiOiJUYW5nbGVkIn0.3lLPQY8iY3u-0i4PSaEjiJJ8_aVqAnd7Ig-0PJWhgms",
});

const supabase = createClient(
  "https://oxymbvreiartsmdbjsyk.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94eW1idnJlaWFydHNtZGJqc3lrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ0NDkwNDAsImV4cCI6MjAxMDAyNTA0MH0.r5cV6YCcOAJFJo2ZoeWpi5PxiPraSL9ccZAEmqwsXns"
);

const IPFSUpload = () => {
  const [cid, setCid] = useState("");

  const onDrop = useCallback(async (acceptedFiles) => {
    try {
      const file = acceptedFiles[0];
      
      const filenamearr = file.name.split(".");
      const fileExtension = filenamearr[1];
      const cid = await web3StorageClient.put([file]);
      setCid(cid);
      console.log("File uploaded with CID:", cid);
      // Read the file using FileReader API
      const reader = new FileReader();

      reader.onload = async () => {
        const fileData = new Uint8Array(reader.result);

        // Upload the file to Web3.Storage

        // Insert data into the Supabase table
        const { data, error } = await supabase.storage
          .from("ipfs-upload-docs") // Replace with your bucket name
          .upload(cid +"."+ fileExtension, fileData, {
            upsert: true,
          });

        if (error) {
          console.error("Error uploading image:", error.message);
        } else {
          console.log("Data uploaded successfully:", data.Key);
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error("Error uploading and inserting data:", error);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className="flex justify-center relative">
      <Bubbles/>
      <div className="flex justify-center flex-col items-center z-10">
        <div
          {...getRootProps()}
          className="flex flex-col justify-between items-center border-dashed border-2 border-black w-[500px] h-30 text-center cursor-pointer py-28"
        >
          <div>
            <Image src={"/document.png"} width={"100"} height={"100"} />
          </div>
          <div>
            <p className="font-bold text-5xl">Upload patient details</p>
          </div>
          <div>
            <input {...getInputProps()} />
          </div>
          <div>
            <p>Drag and drop a file here, or click to select a file</p>
          </div>
        </div>

        <div>
          <p className="text-center">
            Document uploaded with the cid : {cid ? cid : "Loading .... "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default IPFSUpload;
