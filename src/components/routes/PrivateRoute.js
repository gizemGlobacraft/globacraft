import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  // localStorage'dan token kontrolü
  const isAuthenticated = localStorage.getItem("token") !== null;

  return isAuthenticated ? children : <Navigate to="/admin" />;
};

export default PrivateRoute;
