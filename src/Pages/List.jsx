import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const List = () => {
  const { user } = useContext(AuthContext);
  const [spots, setSpots] = useState([]);

  const email = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/mylist/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setSpots(data);
      });
  }, [user]);
  return (
    <div>
      <h1>my list{spots.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Spot Name</th>
              <th>Country</th>
              <th>Seasonality</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {spots.map((spot, index) => (
              <tr key={spot._id}>
                <th>{index + 1}</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>
                  <Link to={`/update/${spot._id}`} className="btn">
                    Update
                  </Link>
                </td>
                <td>
                  <Link className="btn">Delete</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
