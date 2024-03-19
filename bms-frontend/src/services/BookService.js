import axios from "axios";
const REST_API_BASE_URL = "http://localhost:8080/api/books";
const REST_API_BASE_REVIEW_URL = "http://localhost:8081/api/reviews";

export const listBooks = () => axios.get(REST_API_BASE_URL);

export const createBook = (book) => axios.post(REST_API_BASE_URL, book);

export const getBook = (bookId) => axios.get(REST_API_BASE_URL + "/" + bookId);

export const updateBook = (bookId, book) =>
  axios.put(REST_API_BASE_URL + "/" + bookId, book);

export const deleteBook = (bookId) =>
  axios.delete(REST_API_BASE_URL + "/" + bookId);

// Reviews
export const listReviews = () => axios.get(REST_API_BASE_REVIEW_URL);

export const createReview = (review) =>
  axios.post(REST_API_BASE_REVIEW_URL, review);
