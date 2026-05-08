import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/user/LoginForm";
import useAuth from "../context/useAuth";

const LoginPage = () => {
  const [error, setError] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (credentials) => {
    const result = login(credentials);
    if (!result.success) {
      setError(result.message);
      return;
    }
    setError("");
    navigate("/profile");
  };

  return <LoginForm onSubmit={handleLogin} error={error} />;
};

export default LoginPage;
