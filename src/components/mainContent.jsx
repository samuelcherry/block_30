import React from "react";
import { Link } from "react-router-dom";
import fetchAllPlayers from "../API/apiCall";
import { useState, useEffect } from "react";

const MainContent = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const result = await fetchAllPlayers();
        setBooks(result || []);
      } catch (error) {
        console.error("Error fetching books:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(books);
  return (
    <>
      {books.map((book) => {
        console.log("Book ID:", book.id); // Check the ID for each book
        return (
          <div className="bookCard" key={book.id}>
            <ul>
              <li>
                <div>{book.title}</div>
                <div>{book.author}</div>
                <div>{book.description}</div>
                <Link to={`/books/${book.id}`}>
                  <button>Details</button>
                </Link>
                <button>Checkout</button>
              </li>
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default MainContent;
