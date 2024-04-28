import PropTypes from "prop-types";
import SingleSpotCard from "../Components/SingleSpotCard";

const TouristsSpots = ({ spots }) => {
  return (
    <div className="mt-24 bg-green-300 px-5 rounded-2xl py-6">
      <h1 className="text-center text-3xl font-bold mb-5">Tourists spots</h1>
      <p className="text-center text-wrap text-base font-medium">
        From natural wonders to historic landmarks and family-friendly
        attractions, America offers a diverse array of tourist spots to explore
        and discover. Plan your next adventure and create memories that will
        last a lifetime in the land of the free and the home of the brave.
      </p>

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
