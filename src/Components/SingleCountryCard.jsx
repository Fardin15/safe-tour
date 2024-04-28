import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleCountryCard = ({ c }) => {
  console.log(c);
  const { country, img, description } = c;
  return (
    <Link to={`/spots/${country}`} className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-[350px] h-[230px]" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-2xl font-bold">{country}</h2>
        <p className="text-xl font-medium">Description :</p>
        <p className="text-lg font-normal">{description}</p>
      </div>
    </Link>
  );
};

export default SingleCountryCard;
SingleCountryCard.propTypes = {
  c: PropTypes.object,
};
