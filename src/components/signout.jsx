import { useAuth } from "../contexts/auth.context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const SignOut = ({ redirect = "/" }) => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    logout();

    navigate(redirect);
  }, [navigate, logout, redirect]);

  return null;
};

export default SignOut;
