import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const SingleSpotCard = ({ spot }) => {
  const { _id, spot: spotname, photo, cost, season, time, visitors } = spot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="w-[350px] h-[230px]" src={photo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-medium mb-3">{spotname}</h2>

        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Average Cost : </span> {cost}
        </p>
        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Total Visitors Per Year : </span>
          {visitors}
        </p>

        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Travel Time : </span>
          {time}
        </p>
        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Season : </span>
          {season}
        </p>

        <div className="card-actions">
          <NavLink
            to={`/details/${_id}`}
            className="btn btn-block bg-gray-500 text-white text-lg font-medium"
          >
            View Details
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default SingleSpotCard;
SingleSpotCard.propTypes = {
  spot: PropTypes.object.isRequired,
};
