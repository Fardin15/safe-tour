import { useLoaderData, useParams } from "react-router-dom";
import SingleSpotCard from "./SingleSpotCard";
import { useEffect, useState } from "react";

const AllCountriesSpot = () => {
  const [allSpots, setAllSpots] = useState([]);
  const { country } = useParams();
  console.log(country);

  const spots = useLoaderData();
  console.log(spots);

  useEffect(() => {
    const remaining = spots.filter((spot) => spot.country === country);
    setAllSpots(remaining);
  }, []);
  console.log(allSpots);

  return (
    <div className="mt-14 bg-green-300 px-5 rounded-2xl py-6">
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
