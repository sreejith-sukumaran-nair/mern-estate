import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element = {<><Home/></>} />
          <Route path="/sign-in" element = {<><SignIn/></>} />
          <Route path="/sign-up" element = {<><SignUp/></>} />
          <Route path="/about" element = {<><About/></>} />
          <Route path="/profile" element = {<><Profile/></>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
