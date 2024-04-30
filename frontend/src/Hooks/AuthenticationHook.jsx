import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { logout, setInfo } from "../features/Auth/AuthSlice";

const AuthProtect = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      const { expire } = user;
      const now = new Date();
      if (now - expire > 24 * 60 * 60 * 1000) {
        dispatch(logout());
        localStorage.removeItem("token");
        navigate("/login");
      } else {
        localStorage.setItem("token", JSON.stringify({ ...user, expire: now }));
        dispatch(setInfo(user));
      }
    }
  }, [user]);

  return <>{children}</>;
};

export default AuthProtect;
