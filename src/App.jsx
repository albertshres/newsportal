import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FetchData from "./components/FetchData";
import Categories from "./pages/Categories";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Categories />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/general" element={<FetchData cat="general" />}></Route>
          <Route
            path="/business"
            element={<FetchData cat="business" />}
          ></Route>
          <Route
            path="/entertainment"
            element={<FetchData cat="entertainment" />}
          ></Route>
          <Route path="/health" element={<FetchData cat="health" />}></Route>
          <Route path="/science" element={<FetchData cat="science" />}></Route>
          <Route path="/sports" element={<FetchData cat="sports" />}></Route>
          <Route
            path="/technology"
            element={<FetchData cat="technology" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
