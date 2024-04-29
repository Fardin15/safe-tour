import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto text-center">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default ProtectedRoute;

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
