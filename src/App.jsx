import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import DestinationDetail from "./pages/DestinationDetail";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/destinations/:id"
            element={<DestinationDetail />}
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
