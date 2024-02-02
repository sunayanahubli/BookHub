import React, { useEffect, useState } from "react";
// import { Bar } from "react-chartjs-2";
import { listBooks } from "../services/BookService";

const DashboardComponent = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch the list of books
    listBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Extracting data for statistics
  const authors = books.map((book) => book.author);
  const authorCounts = authors.reduce((acc, author) => {
    acc[author] = (acc[author] || 0) + 1;
    return acc;
  }, {});

  const barChartData = {
    labels: Object.keys(authorCounts),
    datasets: [
      {
        label: "Author Distribution",
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",
        data: Object.values(authorCounts),
      },
    ],
  };

  // return (
  //   <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
  //     <div className="card w-75 p-3 rounded shadow">
  //       <h2 className="text-center text-primary mb-2">Dashboard</h2>

  //       {/* Bar Chart */}
  //       <div className="card m-2 p-3">
  //         <h4>Author Distribution</h4>
  //         <Bar
  //           data={barChartData}
  //           options={{
  //             maintainAspectRatio: false,
  //             scales: {
  //               x: {
  //                 type: "category",
  //                 labels: Object.keys(authorCounts),
  //               },
  //               y: {
  //                 beginAtZero: true,
  //               },
  //             },
  //           }}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );

  return <div></div>;
};

export default DashboardComponent;
