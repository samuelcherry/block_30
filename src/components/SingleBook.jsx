import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { rentBookApi } from "../API/apiCall";

export default function SingleBook() {
  const locationInfo = useLocation();
  const book = locationInfo.state.book;
  const { title, author, description, coverimage, id } = book;
  const [available, setAvailable] = useState(book.available);
  const [userKey, setUserKey] = useState(() =>
    localStorage.getItem("current-user-key")
  );

  async function rentBook() {
    const response = await rentBookApi(userKey, id);
    setAvailable(false);
  }

  return (
    <div className="bookCard">
      <div className="info">
        <h2>{title}</h2>
        <h4>{author}</h4>
        <p>{description}</p>

        {available && userKey ? (
          <button onClick={rentBook}>Checkout</button>
        ) : !available && userKey ? (
          <h4>Already Checked OUt</h4>
        ) : (
          <h4>
            <Link to="/account">Log In or Register</Link>
          </h4>
        )}
      </div>
      <div className="book-cover">
        <img src={coverimage} alt={`Cover of ${title}`} />
      </div>
    </div>
  );
}
