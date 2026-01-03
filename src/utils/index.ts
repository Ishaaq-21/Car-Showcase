import { CarProps } from "../types";

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
export default async function fetchCars(manufacturer: string) {
  // if (manufacturer === "") throw Error("Please provide a manufacturer name");
  const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "3786926bd9msh6260f10abfd3e94p15c651jsn1211f31bc268",
      "x-rapidapi-host": "cars-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append(
    "customer",
    process.env.NEXT_PUBLIC_IMAGIN_API_KEY || ""
  );

  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);

  return `${url}`;
};

export type carPropType = "city_mpg" | "highway_mpg" | "combination_mpg";
export const generateCarRandomNumber = (carProp: carPropType) => {
  switch (carProp) {
    case "city_mpg":
      return Math.floor(Math.random() * (40 - 20 + 1)) + 20;
    case "highway_mpg":
      return Math.floor(Math.random() * (120 - 80 + 1)) + 80;
    case "combination_mpg":
      return Math.floor(Math.random() * (35 - 18 + 1)) + 18;
    default:
      return Math.floor(Math.random() * (35 - 18 + 1)) + 18;
  }
};
