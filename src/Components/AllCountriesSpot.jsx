import { useLoaderData, useParams } from "react-router-dom";
import SingleSpotCard from "./SingleSpotCard";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const AllCountriesSpot = () => {
  const [allSpots, setAllSpots] = useState([]);
  const { country } = useParams();
  const spots = useLoaderData();

  useEffect(() => {
    const remaining = spots.filter((spot) => spot.country === country);
    setAllSpots(remaining);
  }, []);

  return (
    <div className="mt-14 bg-green-300 px-5 rounded-2xl py-6">
      <Helmet>
        <title>All Spots Of {country}</title>
      </Helmet>
      <h1 className="text-center text-3xl font-bold mb-5">
        All Spots of {country}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {allSpots.map((spot) => (
          <SingleSpotCard key={spot._id} spot={spot}></SingleSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllCountriesSpot;
