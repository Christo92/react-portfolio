import { Route, Routes } from "react-router-dom";
import Loading from "./Loading";
import Home from "./Home";
import About from "./About";

/**
 * Main application component that defines the routing structure.
 *
 * @returns {JSX.Element} The application component with defined routes.
 */
function App() {
  return (
    <div className="app">
      <Routes>
         {/** Route for the loading screen (initial page) */}
        <Route path="/" element={<Loading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
