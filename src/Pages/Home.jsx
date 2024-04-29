import { useLoaderData } from "react-router-dom";
import AboutUs from "../Sections/AboutUs";
import Banner from "../Sections/Banner";
import ContactUs from "../Sections/ContactUs";
import CounTries from "../Sections/CounTries";
import TouristsSpots from "../Sections/TouristsSpots";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const spots = useLoaderData();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://safe-tour-server.vercel.app/country")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);
  return (
    <div>
      <Helmet>
        <title>SafeTour | Home</title>
      </Helmet>
      <Banner></Banner>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
      <TouristsSpots spots={spots}></TouristsSpots>
      <CounTries countries={countries}></CounTries>
    </div>
  );
};

export default Home;
