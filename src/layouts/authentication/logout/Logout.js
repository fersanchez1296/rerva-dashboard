import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../../zustand/authStore.ts";
import { useLogoutMutation } from "api/api.slice";

const Logout = () => {
  const clearToken = useAuthStore((state) => state.clearToken);
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  useEffect(() => {
    const log_out = async () => {
      const result = await logout();
      console.log(result);
    };
    log_out();
    clearToken();
    navigate("/login");
  }, [clearToken, navigate]);

  return null;
};

export default Logout;
