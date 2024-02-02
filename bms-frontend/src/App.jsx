import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListBookComponent from "./components/ListBookComponent";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import BookComponent from "./components/BookComponent";
import DashboardComponent from "./components/DashboardComponent";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<ListBookComponent />}></Route>
          <Route path="/books" element={<ListBookComponent />}></Route>
          <Route path="/add-book" element={<BookComponent />}></Route>
          <Route path="/update-book/:id" element={<BookComponent />}></Route>
          <Route
            path="/view-dashboard"
            element={<DashboardComponent />}
          ></Route>
        </Routes>

        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
