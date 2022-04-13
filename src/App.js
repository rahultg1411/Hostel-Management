import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import Login from "./Components/Login.js";
import Dashboard from "./Components/Dashboard";
import Roomallotment from "./Components/Roomallotment";
import Cleaning from "./Components/Cleaning";
import Block from "./Components/Block";
import Complaints from "./Components/Complaints";
import Staff from "./Components/Staff";
import React from "react";
import {
  BrowserRouter,
  Redirect,
  Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/roomallotment" element={<Roomallotment />}></Route>
        <Route path="/block" element={<Block />}></Route>
        <Route path="/cleaning" element={<Cleaning />}></Route>
        <Route path="/complaints" element={<Complaints />}></Route>
        <Route path="/Staff" element={<Staff />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
