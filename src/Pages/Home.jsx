import { useLoaderData } from "react-router-dom";
import AboutUs from "../Sections/AboutUs";
import Banner from "../Sections/Banner";
import ContactUs from "../Sections/ContactUs";
import CounTries from "../Sections/CounTries";
import TouristsSpots from "../Sections/TouristsSpots";

const Home = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <TouristsSpots spots={spots}></TouristsSpots>
      <CounTries></CounTries>
    </div>
  );
};

export default Home;
