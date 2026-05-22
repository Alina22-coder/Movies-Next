import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../models/IUser";
import { createRequestToken, createSession, getAccount } from "../services/api.service";

interface AuthContextType {
  user: IUser | null;
  sessionId: string | null;
  login: () => Promise<void>;
  logout: () => void;
  handleCallback: (requestToken: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(
    () => localStorage.getItem("tmdb_session_id"),
  );

  useEffect(() => {
    if (sessionId && !user) {
      getAccount(sessionId).then((data) => {
        if (data.id) setUser(data);
        else {
          localStorage.removeItem("tmdb_session_id");
          setSessionId(null);
        }
      });
    }
  }, [sessionId]);

  const login = async () => {
    const token = await createRequestToken();
    localStorage.setItem("tmdb_request_token", token);
    window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/auth/callback`;
  };

  const handleCallback = async (requestToken: string) => {
    const session = await createSession(requestToken);
    localStorage.setItem("tmdb_session_id", session);
    setSessionId(session);
    const data = await getAccount(session);
    setUser(data);
    localStorage.removeItem("tmdb_request_token");
  };

  const logout = () => {
    localStorage.removeItem("tmdb_session_id");
    localStorage.removeItem("tmdb_request_token");
    setSessionId(null);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, sessionId, login, logout, handleCallback }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
