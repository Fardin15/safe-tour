import PropTypes from "prop-types";
import SingleSpotCard from "../Components/SingleSpotCard";

const TouristsSpots = ({ spots }) => {
  console.log(spots);
  return (
    <div className="mt-24 bg-green-300 px-5 rounded-2xl py-6">
      <h1 className="text-center text-3xl font-bold">tourists spots</h1>
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
