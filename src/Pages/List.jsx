import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

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

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/addspot/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Spot has been deleted.",
                icon: "success",
              });
              // remove the user form the ui
              const remainingUsers = spots.filter((spot) => spot._id !== id);
              setSpots(remainingUsers);
            }
          });
      }
    });
  };
  return (
    <div>
      <h1 className="font-bold text-lg text-center mt-10">My List</h1>
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
                <td>{spot.spot}</td>
                <td>{spot.country}</td>
                <td>{spot.season}</td>
                <td>
                  <Link to={`/update/${spot._id}`} className="btn">
                    Update
                  </Link>
                </td>
                <td>
                  <Link onClick={() => handleDelete(spot._id)} className="btn">
                    Delete
                  </Link>
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
