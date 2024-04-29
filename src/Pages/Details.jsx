import { useLoaderData } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";

const Details = () => {
  const spot = useLoaderData();

  const {
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
    <div className="bg-green-200 py-6">
      <Helmet>
        <title>Details of {spotname}</title>
      </Helmet>
      <h1 className="text-center mb-10 mt-6 text-3xl font-semibold">
        Details of: <span>{spotname}</span>
      </h1>
      <div className="flex justify-center mb-7">
        <div className="card card-compact sm:w-96 md:w-2/3 bg-base-100 shadow-xl">
          <figure>
            <img
              className="sm:w-full sm:h-[230px] md:w-full md:h-[400px]"
              src={photo}
              alt="spot photo"
            />
          </figure>
          <div className="card-body">
            <h2 className="text-3xl font-normal flex justify-start items-center text-wrap gap-2">
              <FaLocationDot />
              {location}
            </h2>
            <p className="text-wrap text-base font-normal">{description}</p>
            <div className="flex sm:flex-col md:flex-row justify-between items-center">
              <p className="text-base font-normal">
                Seasonality : <span className="font-semibold">{season}</span>
              </p>
              <p className="text-base font-normal">
                TravelTime : <span className="font-semibold">{time}</span>
              </p>
              <p className="text-base font-normal">
                Average Cost : <span className="font-semibold">{cost}$</span>
              </p>
            </div>
            <p className="text-base font-normal">
              Visitors Per Year :{" "}
              <span className="font-semibold">{visitors}</span>
            </p>
            <p className="text-base font-normal">
              User : <span className="font-semibold">{name}</span>
            </p>
            <p className="text-base font-normal">
              Email : <span className="font-semibold">{email}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
