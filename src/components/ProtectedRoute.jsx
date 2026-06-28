import { GlobalContext } from "../globalContext/GlobalContext";
import { Children, useContext } from "react";
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
  const { isAuthentication } = useContext(GlobalContext);

  if (!isAuthentication) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;
