import CarCatalogue from "../components/organism/CarCatalogue/CarCatalogue";
import Hero from "../components/organism/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <Hero />
      <CarCatalogue />
    </main>
  );
}
