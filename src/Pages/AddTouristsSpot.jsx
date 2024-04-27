import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const AddTouristsSpot = () => {
  const { user } = useContext(AuthContext);
  console.log(user);

  console.log(user);
  const handleAddSpot = (e) => {
    e.preventDefault();
    const form = e.target;
    const country = form.country.value;
    const spot = form.spot.value;
    const location = form.location.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const cost = form.cost.value;
    const seasonality = form.seasonality.value;
    const time = form.time.value;
    const visitors = form.visitors.value;
    const name = user.displayName;
    const email = user.email;
    const addToSpot = {
      country,
      spot,
      location,
      description,
      photo,
      cost,
      seasonality,
      time,
      visitors,
      name,
      email,
    };

    console.log(addToSpot);
    fetch("http://localhost:5000/addspot", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addToSpot),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    e.target.reset();
  };

  return (
    <div>
      <p className="font-bold text-center">Add Your Spots</p>
      <section className="p-6">
        <form
          onSubmit={handleAddSpot}
          noValidate=""
          action=""
          className="container flex flex-col mx-auto space-y-12"
        >
          <fieldset className="p-6 rounded-md shadow-sm bg-green-200 dark:bg-gray-50">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              {/* country  */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  Country name
                </label>
                <select
                  name="country"
                  className="select select-bordered w-full"
                >
                  <option defaultValue={"pick one"}>Pick one</option>
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
                  name="spot"
                  id="lastname"
                  type="text"
                  placeholder="Tourist Spot Name"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* location */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Location
                </label>
                <input
                  name="location"
                  id="email"
                  type="text"
                  placeholder="Location"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* short description */}
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="address" className="text-sm">
                  Short description
                </label>
                <input
                  name="description"
                  id="address"
                  type="text"
                  placeholder="Short description"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* Image URL */}
              <div className="col-span-full">
                <label htmlFor="city" className="text-sm">
                  Image URL
                </label>
                <input
                  name="photo"
                  id="city"
                  type="text"
                  placeholder="Image URL"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/*  average_cost */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  Average Cost
                </label>
                <input
                  name="cost"
                  id="city"
                  type="text"
                  placeholder="Average Cost"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* seasonality */}
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  Seasonality
                </label>
                <input
                  name="seasonality"
                  id="state"
                  type="text"
                  placeholder="Seasonality"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* travel_time */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Travel Time
                </label>
                <input
                  name="time"
                  id="zip"
                  type="text"
                  placeholder="Travel Time"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>
              {/* totalVisitorsPerYear */}
              <div className="col-span-full sm:col-span-1">
                <label htmlFor="zip" className="text-sm">
                  Total Visitors Per Year
                </label>
                <input
                  name="visitors"
                  id="zip"
                  type="text"
                  placeholder="Total Visitors Per Year"
                  className="w-full rounded-md text-gray-900 dark:text-gray-50   border-gray-700 dark:border-gray-300 py-3 px-4"
                />
              </div>

              <div className="col-span-full">
                <button
                  type="submit"
                  className="btn btn-block rounded-full bg-gray-600 py-2 px-8 text-white transition "
                >
                  Add
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

export default AddTouristsSpot;
