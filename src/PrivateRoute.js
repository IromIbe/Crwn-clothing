import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoute() {
  const user = useSelector((state) => state.users.currentUser);
  return user ? <Outlet /> : <Navigate to='/SignIn' />;
}

export default PrivateRoute;
