import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Outlet } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
