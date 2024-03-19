import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ListBookComponent from "./components/ListBookComponent";
import ListReviewComponent from "./components/ListReviewComponent";
import ReviewComponent from "./components/ReviewComponent";
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
          <Route path="/reviews" element={<ListReviewComponent />}></Route>
          <Route path="/add-review" element={<ReviewComponent />}></Route>
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
