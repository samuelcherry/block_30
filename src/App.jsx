import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navigation";
import Main from "./components/mainContent";
import SingleBook from "./components/SingleBook";

function App() {
  return (
    <>
      <div id="gridContainer">
        <div className="nav">
          <Navigation />
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/books/:id" element={<SingleBook />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
