import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import SingleBook from "./components/SingleBook";
import Homepage from "./Pages/Homepage";
import AccountPage from "./Pages/AccountPage";
import BooksPage from "./Pages/BooksPage";
import Header from "./components/Header";
import AvailableBooksPage from "./Pages/AvailableBooksPage";

function App() {
  return (
    <>
      <div id="gridContainer">
        <div className="nav">
          <Header />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books" element={<BooksPage />} />
            <Route path="/books/:id" element={<SingleBook />} />
            <Route path="/availablebooks" element={<AvailableBooksPage />} />
            <Route path="/account" element={<AccountPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
