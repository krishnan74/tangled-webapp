import React, { useState } from "react";

function FileSearch({ onSearch }) {
  const [cid, setCid] = useState("");

  const handleSearch = () => {
    onSearch(cid);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter CID"
        value={cid}
        onChange={(e) => setCid(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default FileSearch;
