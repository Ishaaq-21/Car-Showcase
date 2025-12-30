"use client";
import React, { useEffect, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [allCars, setAllCars] = useState<null | []>(null);

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
      {!allCars ? (
        <div>Please search a car model or maker</div>
      ) : allCars.length < 1 ? (
        <p className="text-2xl font-semibold text-red">
          Oops! there are no available cars in your chosen maker | model
        </p>
      ) : (
        <div>
          {allCars.map((car, index) => (
            <p key={index}>{car.model as string}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
