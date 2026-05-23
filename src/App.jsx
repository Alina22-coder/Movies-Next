import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Header />
      <Outlet />
      <Footer />
    </AuthProvider>
  );
}

export default App;
