import { useLoaderData } from "react-router-dom";

const AllTouristsSpot = () => {
  const spots = useLoaderData();
  console.log(spots);
  return (
    <div>
      <h1>all tourists spot</h1>
    </div>
  );
};

export default AllTouristsSpot;
