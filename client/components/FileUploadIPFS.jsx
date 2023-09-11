"use client";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Web3Storage } from "web3.storage";

import Web3 from "web3";
import ContractABI from "../app/web3/contracts/ContractABI.json"; // Replace with your ABI path
import ContractAddress from "../app/web3/contracts/ContractAddress.json"; // Replace with your address path

const web3StorageClient = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRBQkI4YTdhNEM4QkVCQTJhM0U5M0VmQTNiMGI0MzcwRWY0ODU5OTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ0MTgxMjQ5MTIsIm5hbWUiOiJUYW5nbGVkIn0.3lLPQY8iY3u-0i4PSaEjiJJ8_aVqAnd7Ig-0PJWhgms",
});

const IPFSUpload = () => {
   const onDrop = useCallback(async (acceptedFiles) => {
    // Upload the file to Web3.Storage
    const file = acceptedFiles[0];
    const cid = await web3StorageClient.put([file]);

    // Log the CID (Content Identifier)
    console.log('File uploaded with CID:', cid);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyles}>
      <input {...getInputProps()} />
      <p>Drag and drop a file here, or click to select a file</p>
    </div>
  );
};

const dropzoneStyles = {
  border: "2px dashed #ccc",
  borderRadius: "4px",
  padding: "20px",
  textAlign: "center",
  cursor: "pointer",
};

export default IPFSUpload;
