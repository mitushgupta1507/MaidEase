import Hero from "../components/Home/Hero";
import Services from "../components/Home/Services";
import FeaturedWorkers from "../components/Home/FeaturedWorkers";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import CTA from "../components/Home/CTA";

const Home = () => {
  return (
    <main className="bg-white overflow-hidden">

      <Hero />

      <Services />

      <FeaturedWorkers />

      <WhyChooseUs />

      <CTA />

    </main>
  );
};

export default Home;