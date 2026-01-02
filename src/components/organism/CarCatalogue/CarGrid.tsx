import { CarProps } from "@/src/types";
import React from "react";
import CarCard from "./CarCard";

const CarGrid = ({ carsList }: { carsList: CarProps[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {carsList.map((car: CarProps) => (
        <CarCard key={car.class} car={car} />
      ))}
    </div>
  );
};

export default CarGrid;
