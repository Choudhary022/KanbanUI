import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./modules/Dashboard";

import SignIn from "./modules/Authentication/SignIn";

import TopBar from "./mainLayout/topBar/index";

import Home from "./modules/Home/index";

function App() {
  
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route  element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;





