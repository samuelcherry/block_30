import { useEffect, useState } from "react";
import { getUserInfo, reservationListApi, returnBookApi } from "../API/apiCall";
import BookPreview from "./BookPreview";

export default function Account() {
  const [userInfoArray, setUserInfoArray] = useState([]);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function retrieveUserInfo() {
      const userKey = localStorage.getItem("current-user-key");
      try {
        const userInfoApi = await getUserInfo(userKey);
        setUserInfoArray(userInfoApi);
        const bookListApi = await reservationListApi(userKey);
        setBookList(bookListApi.reservation);
      } catch (error) {
        console.log(error);
      }
    }
    retrieveUserInfo();
  }, []);

  function accountBookPreview(bookInfo, indexInfo) {
    const { id } = bookInfo;
    const userKey = localStorage.getItem("current-user-key");
    async function returnBook() {
      await returnBookApi(userKey, id);
      location.reload();
    }
    return (
      <li>
        <BookPreview book={bookInfo} key={indexInfo} />
        <button onClick={returnBook}>Return {bookInfo.title}</button>
      </li>
    );
  }

  return (
    <div className="account-info">
      <h1>Account Info</h1>
      <p>First Name: {userInfoArray.firstname}</p>
      <p>Last Name: {userInfoArray.lastname}</p>
      <p>Email: {userInfoArray.email}</p>
      <h2>Currently Checked Out Books: </h2>
      <ul className="book-preview">
        {bookList.map((book, key) => accountBookPreview(book, key))}
      </ul>
    </div>
  );
}
