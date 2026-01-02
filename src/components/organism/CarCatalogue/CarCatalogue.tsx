import Container from "../../common/Container";
import CarFilter from "./CarFilter";

const CarCatalogue = () => {
  return (
    <Container className="my-30 lg:my-10">
      <div className="mb-5">
        <h1 className="text-5xl font-bold">Car Catalogue</h1>
        <p className="text-lg mt-2 font-semibold text-gray-500">
          Explore out cars you might like
        </p>
      </div>
      <CarFilter />
    </Container>
  );
};

export default CarCatalogue;
