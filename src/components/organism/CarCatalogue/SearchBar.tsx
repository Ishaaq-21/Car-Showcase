"use client";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");

  const handleFormSubmit = () => {};

  return (
    <div>
      <form
        onSubmit={handleFormSubmit}
        className="flex justify-between items-center"
      >
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManufacturer}
        />
      </form>
    </div>
  );
};

export default SearchBar;
