import { useState, useEffect } from "react";
import { fetchAllBooks } from "../API/apiCall";
import Search from "../components/Search";

export default function Homepage() {
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
      <h2 className="header">Welcome to Book buddy</h2>
      <Search bookList={bookList} />
    </>
  );
}
