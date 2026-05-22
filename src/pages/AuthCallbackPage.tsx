import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const { handleCallback } = useAuth();
  const navigate = useNavigate();
  const called = useRef(false);

  useEffect(() => {
    if (called.current) return;
    called.current = true;

    const token = searchParams.get("request_token");
    if (!token) {
      navigate("/");
      return;
    }
    handleCallback(token).finally(() => navigate("/"));
  }, []);

  return <p style={{ padding: "2rem" }}>Авторизація...</p>;
};
