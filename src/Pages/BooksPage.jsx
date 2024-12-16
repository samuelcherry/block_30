import Books from "../components/Books";
import { useState, useEffect } from "react";
import { fetchAllBooks } from "../API/apiCall";

export default function BooksPage() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    async function retrieveBookList() {
      try {
        const newBooks = await fetchAllBooks();
        setBookList(newBooks);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveBookList();
  }, []);
  return (
    <>
      <Books books={bookList} />
    </>
  );
}
