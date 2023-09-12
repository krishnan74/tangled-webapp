import React, { useEffect, useState } from "react";
import { Web3Storage } from "web3.storage";

const web3StorageClient = new Web3Storage({
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGRBQkI4YTdhNEM4QkVCQTJhM0U5M0VmQTNiMGI0MzcwRWY0ODU5OTMiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2OTQ0MTgxMjQ5MTIsIm5hbWUiOiJUYW5nbGVkIn0.3lLPQY8iY3u-0i4PSaEjiJJ8_aVqAnd7Ig-0PJWhgms",
});

function FileViewer({ cid }) {
  const [fileURL, setFileURL] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        if (cid) {
          // Retrieve the file from Web3.Storage using the CID
          const response = await web3StorageClient.get(cid);

          if (response.ok) {
            // Construct the URL for the image file with content type image/*
            const data = await response.blob();
            const url = URL.createObjectURL(data);
            setFileURL(url);
            console.log(url);
          } else {
            console.error("Failed to fetch file:", response.statusText);
          }
        }
      } catch (error) {
        console.error("Error fetching file:", error);
      }
    }

    fetchData();
  }, [cid]);

  return (
    <div>
      <h2>File Viewer</h2>
      {cid ? (
        fileURL ? (
          <div>
            <p>File retrieved successfully:</p>
            <img src={fileURL} alt="File Preview" />
          </div>
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <p>Enter a CID to search for an image.</p>
      )}
    </div>
  );
}

export default FileViewer;
