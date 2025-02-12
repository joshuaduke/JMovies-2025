import { Outlet, Navigate } from "react-router";
import { user } from "../../appwrite";

const ProtectedRoutes = () => {
  console.log("User", user);

  return user.email != "" ? <Outlet /> : <Navigate to="/signin" />;
};

export default ProtectedRoutes;
