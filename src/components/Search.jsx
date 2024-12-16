import React, { useEffect, useState } from "react";
import BookPreview from "./BookPreview";

export default function Search({ bookList }) {
  const [resultArray, setResultArray] = useState([]);

  function handleSearch(e) {
    let searchResults = bookList.filter((book) =>
      book.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    searchResults.length > 0
      ? setResultArray(searchResults)
      : setResultArray(["No Results"]);
  }

  return (
    <div id="search-results">
      <div className="search-bar">
        <label>
          Book Title:
          <input type="text" placeholder="Search" onChange={handleSearch} />
        </label>
      </div>
      {resultArray != 0 && (
        <>
          <h2>Search Results</h2>
          <div>
            {resultArray[0] === "No Results" ? (
              <p>No Results</p>
            ) : (
              <ul>
                {resultArray.map((book, index) => {
                  return <BookPreview key={index} book={book} />;
                })}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}
