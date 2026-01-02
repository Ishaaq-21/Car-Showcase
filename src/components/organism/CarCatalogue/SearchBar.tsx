"use client";
import { useEffect, useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import fetchCars from "@/src/utils";
import CarGrid from "./CarGrid";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [allCars, setAllCars] = useState<null | []>(null);

  useEffect(() => {
    const fetchData = async () => {
      const carsList = await fetchCars(manufacturer);
      setAllCars(carsList);
    };
    fetchData();
  }, [manufacturer]);
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
        <CarGrid carsList={allCars} />
      )}
    </div>
  );
};

export default SearchBar;
