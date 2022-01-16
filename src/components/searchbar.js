import React, { useState, useEffect } from "react";
import { BiSearchAlt } from "react-icons/bi";

function Searchbar() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <>
      <div>
        <input
          value={searchInput}
          type="text"
          placeholder="search.. "
          onChange={(e) => setSearchInput(e.target.value)}
          className="px-2 mr-6 border-2"
        />
      </div>
    </>
  );
}

export default Searchbar;
