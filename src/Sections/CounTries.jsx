import PropTypes from "prop-types";
import SingleCountryCard from "../Components/SingleCountryCard";
const CounTries = ({ countries }) => {
  return (
    <div className="mt-24 bg-green-300 px-5 rounded-2xl py-6">
      <h1 className="text-center text-3xl font-bold mb-5">Countries</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {countries.map((c) => (
          <SingleCountryCard key={c._id} c={c}></SingleCountryCard>
        ))}
      </div>
    </div>
  );
};

export default CounTries;
CounTries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
