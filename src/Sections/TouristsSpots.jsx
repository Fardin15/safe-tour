import PropTypes from "prop-types";
import SingleSpotCard from "../Components/SingleSpotCard";
import { useEffect, useState } from "react";

const TouristsSpots = ({ spots }) => {
  const [sortSpot, setSortSpot] = useState([]);

  useEffect(() => {
    setSortSpot(spots);
  }, []);

  const handleSortByCost = () => {
    let sortedCost = sortSpot.sort((c1, c2) =>
      c1.cost < c2.cost ? 1 : c1.cost > c2.cost ? -1 : 0
    );
    setSortSpot(sortedCost);
    setSortSpot([...sortSpot]);
  };

  return (
    <div className="mt-24 bg-green-300 px-5 rounded-2xl py-6">
      <h1 className="text-center text-3xl font-bold mb-5">Tourists spots</h1>
      <p className="text-center text-wrap text-base font-medium">
        From natural wonders to historic landmarks and family-friendly
        attractions, America offers a diverse array of tourist spots to explore
        and discover. Plan your next adventure and create memories that will
        last a lifetime in the land of the free and the home of the brave.
      </p>
      {/* sorting btn */}
      <div className="flex justify-center items-center mt-5">
        <details className="dropdown">
          <summary className="m-1 btn bg-[#23BE0A] font-semibold text-lg text-[#FFFFFF]">
            Sort By
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-[200px]">
            <li>
              <a onClick={handleSortByCost}>Average Cost</a>
            </li>
          </ul>
        </details>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {spots.slice(0, 6).map((spot) => (
          <SingleSpotCard key={spot._id} spot={spot}></SingleSpotCard>
        ))}
      </div>
    </div>
  );
};

export default TouristsSpots;
TouristsSpots.propTypes = {
  spots: PropTypes.array,
};
