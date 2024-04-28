import { useLoaderData } from "react-router-dom";
import SingleSpotCard from "../Components/SingleSpotCard";
import { useEffect, useState } from "react";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  console.log(spots);

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
    <div className="mt-14 bg-green-300 px-5 rounded-2xl py-6">
      <h1 className="text-center text-3xl font-bold">All Tourists Spot</h1>

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
        {spots.map((spot) => (
          <SingleSpotCard key={spot._id} spot={spot}></SingleSpotCard>
        ))}
      </div>
    </div>
  );
};

export default AllTouristsSpot;
