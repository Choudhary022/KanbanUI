import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Dashboard from "./modules/Dashboard";

import SignIn from "./modules/Authentication/SignIn";
import Navbar from "./MainLayout/NavBar";

const App = () => {
  return (
    < BrowserRouter>
     <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signIn" element={<SignIn />} />
    </Routes>
    </BrowserRouter>
  );
};

export default App;
