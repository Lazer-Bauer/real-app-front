import { useAuth } from "../contexts/auth.context";
import { Navigate } from "react-router-dom";

const ProtectedRout = ({ children, onlyBiz = false }) => {
  const { user } = useAuth;
  console.log(user);
  if (!user || (onlyBiz && !user.biz)) {
    return <Navigate to="/sign-in" />;
  }

  return children;
};
export default ProtectedRout;
