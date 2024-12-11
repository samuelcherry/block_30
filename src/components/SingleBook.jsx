import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import fetchAllPlayers from "../API/apiCall";

const SingleBook = () => {
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

  const { id } = useParams();
  console.log("Received ID:", id);
  const book = books.find((b) => b.id === parseInt(id));
  console.log(book);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>; // Handle the case where book is not found
  }

  return (
    <div className="bookCard">
      <div>{book.title}</div>
      <div>{book.author}</div>
      <div>{book.description}</div>
    </div>
  );
};

export default SingleBook;
