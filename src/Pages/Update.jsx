import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Update = () => {
  const { user } = useContext(AuthContext);

  const {
    _id,
    country,
    spot,
    location,
    description,
    photo,
    cost,
    season,
    time,
    visitors,
  } = useLoaderData();

  const handleUpdateSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const spot = form.spot.value;
    const location = form.location.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const cost = form.cost.value;
    const season = form.season.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const name = user.displayName;
    const email = user.email;
    const updatedSpot = {
      country,
      spot,
      location,
      description,
      photo,
      cost,
      season,
      time,
      visitors,
      name,
      email,
    };

    fetch(`https://safe-tour-server.vercel.app/addspot/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Spot updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
      });
  };
  return (
    <div>
      <Helmet>
        <title>Update Spot | SafeTour</title>
      </Helmet>
      <p className="font-bold text-lg text-center mt-10">Update Your Spots</p>
      <section className="p-6">
        <form
          onSubmit={handleUpdateSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="p-6 rounded-md shadow-sm bg-green-200 dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* country  */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Country
                </label>
                <select
                  name="country"
                  className="select select-bordered w-full"
                >
                  <option defaultValue={country}>{country}</option>
                  <option value={"USA"}>USA</option>
                  <option value={"Canada"}>Canada</option>
                  <option value={"Brazil"}>Brazil</option>
                  <option value={"Argentina"}>Argentina</option>
                  <option value={"Maxico"}>Maxico</option>
                  <option value={"Peru"}>Peru</option>
                </select>
              </div>
              {/* tourists_spot_name */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Tourist Spot Name
                </label>
                <input
                  defaultValue={spot}
                  name="spot"
                  id="lastname"
                  type="text"
                  placeholder="Tourist Spot Name"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* location */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Location
                </label>
                <input
                  defaultValue={location}
                  name="location"
                  id="email"
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* short description */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Short description
                </label>
                <input
                  defaultValue={description}
                  name="description"
                  id="address"
                  type="text"
                  placeholder="Short description"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Image URL */}
              <div className="col-span-full">
                <label htmlFor="city" className="text-sm">
                  Image URL
                </label>
                <input
                  defaultValue={photo}
                  name="photo"
                  id="city"
                  type="text"
                  placeholder="Image URL"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/*  average_cost */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  defaultValue={cost}
                  name="cost"
                  id="city"
                  type="number"
                  placeholder="Give Cost only in number"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* season  */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="firstname" className="text-sm">
                  Season name
                </label>
                <select name="season" className="select select-bordered w-full">
                  <option defaultValue={season}>{season}</option>
                  <option value={"Spring"}>Spring</option>
                  <option value={"Summer"}>Summer</option>
                  <option value={"Autumn "}>Autumn </option>
                  <option value={"Winter"}>Winter</option>
                </select>
              </div>
              {/* travel_time */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  defaultValue={time}
                  name="time"
                  id="zip"
                  type="text"
                  placeholder="Travel Time"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* totalVisitorsPerYear */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  defaultValue={visitors}
                  name="visitors"
                  id="zip"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md text-gray-500 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="btn btn-block rounded-full bg-gray-600 py-2 px-8 text-white transition "
                >
                  Update
                </button>
              </div>
            </div>
          </fieldset>
          {/* Submit button */}
        </form>
      </section>
    </div>
  );
};

export default Update;
