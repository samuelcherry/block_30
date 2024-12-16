import Books from "../components/Books";
import fetchAllBooks from "../API/apiCall";
import { useState, useEffect } from "react";

const MainContent = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchBooks() {
      try {
        const result = await fetchAllBooks();
        setBooks(result);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    }
    fetchBooks();
  }, []);

  return (
    <>
      <Books books={bookList} />
    </>
  );
};

export default MainContent;
