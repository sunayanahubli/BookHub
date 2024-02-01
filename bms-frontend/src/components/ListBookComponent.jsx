import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { deleteBook, listBooks } from "../services/BookService";
import { Button } from "bootstrap";
import { useNavigate } from "react-router-dom";
const ListBookComponent = () => {
  const [books, setBooks] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    getAllBooks();
  }, []);

  function getAllBooks() {
    listBooks()
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function addNewBook() {
    navigator("/add-Book");
  }

  function updateBook(id) {
    navigator(`/update-Book/${id}`);
  }

  function removeBook(id) {
    console.log(id);
    deleteBook(id)
      .then((response) => {
        console.log(response.data);
        getAllBooks();
      })
      .catch((error) => console.error(error));
    navigator();
  }
  // return (
  //   <div className="container-fluid mt-5">
  //     <div className="card w-75 mx-auto">
  //       <div className="card-header bg-primary text-white text-center">
  //         <h2>List of Books</h2>
  //       </div>
  //       <br />
  //       <div className="text-center">
  //         <button className="btn btn-primary btn-lg" onClick={addNewBook}>
  //           Add Book
  //         </button>{" "}
  //       </div>
  //       <br />
  //       <table className="table table-hover">
  //         <thead className="thead-dark">
  //           <tr>
  //             <th>ID</th>
  //             <th>Title</th>
  //             <th>Author</th>
  //             <th>ISBN</th>
  //             <th>Update</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {books.map((book) => (
  //             <tr key={book.id}>
  //               <td>{book.id}</td>
  //               <td>{book.title}</td>
  //               <td>{book.author}</td>
  //               <td>{book.isbn}</td>
  //               <td>
  //                 <div>
  //                   <button
  //                     className="btn btn-info btn-secondary"
  //                     onClick={() => updateBook(book.id)}
  //                   >
  //                     Update
  //                   </button>

  //                   <button
  //                     className="btn btn-danger btn-secondary"
  //                     onClick={() => removeBook(book.id)}
  //                     style={{ marginLeft: "10px" }}
  //                   >
  //                     Delete
  //                   </button>
  //                 </div>
  //               </td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   </div>
  // );

  return (
    <div className="container-fluid vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card w-75 p-3 rounded shadow">
        <h2 className="text-center text-primary mb-2">Book Library</h2>
        <div className="d-flex justify-content-end mb-3">
          <button className="btn btn-success" onClick={addNewBook}>
            + Add New Book
          </button>
        </div>
        <div>
          <table className="table table-bordered table-light mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Author</th>
                <th scope="col">ISBN</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {books.map((book) => (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.isbn}</td>
                  <td>
                    <div className="btn-group" role="group">
                      <button
                        className="btn btn-info"
                        onClick={() => updateBook(book.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => removeBook(book.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ListBookComponent;
