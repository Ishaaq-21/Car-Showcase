import Image from "next/image";
import Container from "../common/Container";

const Hero = () => {
  return (
    <div className="h-full w-full flex-center  min-h-screen">
      <Container>
        <div className="flex flex-col lg:flex-row gap-5 items-center pt-28 lg:pt-5  min-h-full">
          <div className="text flex-1">
            <h1 className="hero__title ">
              Find, book, rent a car—quick and super easy!
            </h1>
            <p className="hero__subtitle text-lg text-black/80">
              Streamline your car rental experience with our effortless booking
              process.
            </p>
            <button className="mt-4 px-4 py-3 rounded-full border font-semibold hover-effect text-white bg-primary-blue cursor-pointer">
              Explore Cars
            </button>
          </div>
          <div className="relative lg:static flex-1 flex justify-end items-end w-full mt-10 lg:mt-0">
            <div className="image-car-container relative w-full sm:w-3/4 md:w-3/5 h-64 lg:w-[90%] lg:h-100 md:-translate-x-20 lg:-translate-x-10 ">
              <Image
                priority
                src={"/hero.png"}
                alt="Silver Toyota Fortuner"
                fill={true}
              />
            </div>
            <div className="absolute w-full lg:w-1/2 h-112.5 lg:h-screen -skew-y-6 -top-10 lg:-top-1/5 -right-1/4 lg:-right-10 -z-10">
              <Image priority src="/hero-bg.png" alt="" fill={true} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
