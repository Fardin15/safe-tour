import { useLoaderData } from "react-router-dom";
import AboutUs from "../Sections/AboutUs";
import Banner from "../Sections/Banner";
import ContactUs from "../Sections/ContactUs";
import CounTries from "../Sections/CounTries";
import TouristsSpots from "../Sections/TouristsSpots";
import { useEffect, useState } from "react";

const Home = () => {
  const spots = useLoaderData();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <TouristsSpots spots={spots}></TouristsSpots>
      <CounTries countries={countries}></CounTries>
    </div>
  );
};

export default Home;
