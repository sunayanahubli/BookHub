import React, { useEffect, useState } from "react";
import { createBook, getBook, updateBook } from "../services/BookService";
import { useNavigate, useParams } from "react-router-dom";

const BookComponent = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const { id } = useParams();
  const navigator = useNavigate();
  function pageTitle() {
    if (id) return "Update Book";
    else return "Add Book";
  }
  const [errors, setErrors] = useState({
    title: "",
    author: "",
    isbn: "",
  });

  useEffect(() => {
    if (id) {
      getBook(id)
        .then((response) => {
          setTitle(response.data.title);
          setAuthor(response.data.author);
          setIsbn(response.data.isbn);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);
  function saveOrUpdateBook(event) {
    event.preventDefault();
    const book = { title, author, isbn };
    console.log(book);
    if (validateForm()) {
      if (id) {
        updateBook(id, book)
          .then((response) => {
            console.log(response.data);

            navigator("/books");
          })
          .catch((err) => {
            console.error(err);
          });
      } else {
        createBook(book)
          .then((response) => {
            console.log(response.data);

            navigator("/books");
          })
          .catch((err) => {
            console.error(err);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "Title is required.";
      valid = false;
    }
    if (author.trim()) {
      errorsCopy.author = "";
    } else {
      errorsCopy.author = "Author is required.";
      valid = false;
    }
    if (isbn.trim()) {
      errorsCopy.isbn = "";
    } else {
      errorsCopy.isbn = "Title is required.";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }
  // return (
  //   <div className="container">
  //     <br />
  //     <br />
  //     <div className="row">
  //       <div className="card col-md-6 offset-md-3 offset-md-3"></div>
  //       <h1 className="text-center">{pageTitle()}</h1>
  //       <div className="card-body">
  //         <form>
  //           <div className="form-group mb-2">
  //             <label className="form-label">Title:</label>
  //             <input
  //               type="text"
  //               placeholder="Enter title"
  //               name="title"
  //               value={title}
  //               className={`form-control ${errors.title ? "is-invalid" : ""}`}
  //               onChange={(e) => setTitle(e.target.value)}
  //             ></input>
  //             {errors.title && (
  //               <div className="invalid-feedback">{errors.title}</div>
  //             )}
  //           </div>
  //           <div className="form-group mb-2">
  //             <label className="form-label">Author:</label>
  //             <input
  //               type="text"
  //               placeholder="Enter Author"
  //               name="Author"
  //               value={author}
  //               className={`form-control ${errors.author ? "is-invalid" : ""}`}
  //               onChange={(e) => setAuthor(e.target.value)}
  //             ></input>
  //             {errors.author && (
  //               <div className="invalid-feedback">{errors.author}</div>
  //             )}
  //           </div>

  //           <div className="form-group mb-2">
  //             <label className="form-label">ISBN:</label>
  //             <input
  //               type="text"
  //               placeholder="Enter ISBN"
  //               name="ISBN"
  //               value={isbn}
  //               className={`form-control ${errors.isbn ? "is-invalid" : ""}`}
  //               onChange={(e) => setIsbn(e.target.value)}
  //             ></input>
  //             {errors.isbn && (
  //               <div className="invalid-feedback">{errors.isbn}</div>
  //             )}
  //           </div>
  //           <button className="btn btn-success" onClick={saveOrUpdateBook}>
  //             Submit
  //           </button>
  //         </form>
  //       </div>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg p-5 rounded-3 bg-light">
            <h1 className="text-center mb-4 display-4">{pageTitle()}</h1>
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="form-label fs-5">
                  Title:
                </label>
                <input
                  type="text"
                  id="title"
                  placeholder="Enter title"
                  name="title"
                  value={title}
                  className={`form-control form-control-lg ${
                    errors.title ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {errors.title && (
                  <div className="invalid-feedback fs-6">{errors.title}</div>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="author" className="form-label fs-5">
                  Author:
                </label>
                <input
                  type="text"
                  id="author"
                  placeholder="Enter Author"
                  name="Author"
                  value={author}
                  className={`form-control form-control-lg ${
                    errors.author ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setAuthor(e.target.value)}
                />
                {errors.author && (
                  <div className="invalid-feedback fs-6">{errors.author}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="isbn" className="form-label fs-5">
                  ISBN:
                </label>
                <input
                  type="text"
                  id="isbn"
                  placeholder="Enter ISBN"
                  name="ISBN"
                  value={isbn}
                  className={`form-control form-control-lg ${
                    errors.isbn ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setIsbn(e.target.value)}
                />
                {errors.isbn && (
                  <div className="invalid-feedback fs-6">{errors.isbn}</div>
                )}
              </div>
              <div className="d-grid">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={saveOrUpdateBook}
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

export default BookComponent;
