import PropTypes from "prop-types";
const CounTries = ({ countries }) => {
  console.log(countries);
  return (
    <div className="">
      <h1>countries{countries.length}</h1>
    </div>
  );
};

export default CounTries;
CounTries.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
