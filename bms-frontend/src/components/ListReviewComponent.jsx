import React, { useEffect, useState } from "react";
import { listReviews } from "../services/BookService";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";

const ListReviewComponent = () => {
  const [reviews, setReviews] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getAllReviews();
  }, []);

  function getAllReviews() {
    listReviews()
      .then((response) => {
        setReviews(
          response.data.map((review) => ({ ...review, expanded: false }))
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addNewReview() {
    navigator("/add-Review");
  }

  // Function to toggle the expanded state of a review
  const toggleExpanded = (index) => {
    const updatedReviews = [...reviews];
    updatedReviews[index].expanded = !updatedReviews[index].expanded;
    setReviews(updatedReviews);
  };

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card w-75 p-3 rounded shadow">
        <h2 className="text-center text-primary mb-2">Reviews</h2>
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-success mr-2" onClick={addNewReview}>
            + Add Review
          </button>
        </div>

        <div>
          <table className="table table-bordered table-light mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Reviewer Name</th>
                <th scope="col">Review</th>
                <th scope="col">Book Title</th>
                <th scope="col">Rating</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, index) => (
                <tr key={review.id}>
                  <td>{review.id}</td>
                  <td>{review.reviewerName}</td>
                  <td>
                    {review.expanded || review.reviewText.length < 50
                      ? review.reviewText
                      : `${review.reviewText.slice(0, 50)}...`}{" "}
                    {/* Display full text if expanded or if text length is less than 200 characters */}
                    {!review.expanded &&
                      review.reviewText.length >= 50 && ( // Render "Read More" button if text is truncated
                        <button
                          className="btn btn-link p-0"
                          onClick={() => toggleExpanded(index)}
                        >
                          Read More
                        </button>
                      )}
                    {review.expanded && ( // Render "Hide" button if review is expanded
                      <button
                        className="btn btn-link p-0"
                        onClick={() => toggleExpanded(index)}
                      >
                        Read Less
                      </button>
                    )}
                  </td>
                  <td>{review.bookTitle}</td>
                  <td>{review.rating}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListReviewComponent;
