import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { data } from "autoprefixer";

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
    </div>
  );
};

export default List;
