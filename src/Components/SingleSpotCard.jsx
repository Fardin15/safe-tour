const SingleSpotCard = ({ spot }) => {
  console.log(spot);
  const {
    country,
    spot: spotname,
    location,
    description,
    photo,
    cost,
    season,
    time,
    visitors,
    name,
    email,
  } = spot;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img
          // src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="text-center text-xl font-medium mb-3">{spotname}</h2>

        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Average Cost :</span> {cost}
        </p>
        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Total Visitors Per Year :</span>{" "}
          {visitors}
        </p>

        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Travel Time :</span>
        </p>
        <p className=" text-base font-normal mb-3">
          <span className="font-semibold">Season :</span>
        </p>

        <div className="card-actions">
          <button className="btn btn-block btn-primary text-lg font-medium">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleSpotCard;
