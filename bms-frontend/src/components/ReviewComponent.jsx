import React, { useEffect, useState } from "react";
import { createReview, listReviews } from "../services/BookService";
import { useNavigate, useParams } from "react-router-dom";

const ReviewComponent = () => {
  const [reviewerName, setreviewerName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [rating, setRating] = useState("");
  const { id } = useParams();
  const navigator = useNavigate();
  function pageTitle() {
    return "Add Review";
  }
  const [errors, setErrors] = useState({
    reviewerName: "",
    reviewText: "",
    bookTitle: "",
    rating: "",
  });

  useEffect(() => {
    if (id) {
      listReviews()
        .then((response) => {
          setreviewerName(response.data.reviewerName);
          setReviewText(response.data.reviewText);
          setBookTitle(response.data.bookTitle);
          setRating(response.data.rating);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateReview(event) {
    event.preventDefault();
    const review = { reviewerName, reviewText, bookTitle, rating };
    console.log(review);
    if (validateForm()) {
      createReview(review)
        .then((response) => {
          console.log(response.data);

          navigator("/reviews");
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (reviewerName.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "Reviewer Name is required.";
      valid = false;
    }
    if (reviewText.trim()) {
      errorsCopy.reviewText = "";
    } else {
      errorsCopy.reviewText = "Review is required.";
      valid = false;
    }
    if (bookTitle.trim()) {
      errorsCopy.bookTitle = "";
    } else {
      errorsCopy.bookTitle = "Book Title is required.";
      valid = false;
    }
    if (rating.trim()) {
      errorsCopy.rating = "";
    } else {
      errorsCopy.rating = "Rating is required.";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-5 rounded-3 bg-light">
            <h1 className="text-center mb-4 display-4">{pageTitle()}</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="reviewerName" className="form-label fs-5">
                  Reviewer Name:
                </label>
                <input
                  type="text"
                  id="reviewerName"
                  placeholder="Enter reviewer Name"
                  name="title"
                  value={reviewerName}
                  className={`form-control form-control-lg ${
                    errors.title ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setreviewerName(e.target.value)}
                />
                {errors.reviewerName && (
                  <div className="invalid-feedback fs-6">
                    {errors.reviewerName}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="ReviewText" className="form-label fs-5">
                  Review:
                </label>
                <input
                  type="text"
                  id="reviewText"
                  placeholder="Enter review"
                  name="reviewText"
                  value={reviewText}
                  className={`form-control form-control-lg ${
                    errors.reviewText ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setReviewText(e.target.value)}
                />
                {errors.reviewText && (
                  <div className="invalid-feedback fs-6">
                    {errors.reviewText}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="bookTitle" className="form-label fs-5">
                  bookTitle:
                </label>
                <input
                  type="text"
                  id="bookTitle"
                  placeholder="Enter bookTitle"
                  name="bookTitle"
                  value={bookTitle}
                  className={`form-control form-control-lg ${
                    errors.bookTitle ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setBookTitle(e.target.value)}
                />
                {errors.bookTitle && (
                  <div className="invalid-feedback fs-6">
                    {errors.bookTitle}
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="rating" className="form-label fs-5">
                  Rating:
                </label>
                <input
                  type="text"
                  id="rating"
                  placeholder="Enter Rating"
                  name="rating"
                  value={rating}
                  className={`form-control form-control-lg ${
                    errors.rating ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setRating(e.target.value)}
                />
                {errors.rating && (
                  <div className="invalid-feedback fs-6">{errors.rating}</div>
                )}
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={saveOrUpdateReview}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
