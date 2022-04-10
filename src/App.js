import "./App.css";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App" align="center">
        <h2>React js CRUD operations</h2>

        <Routes>
          <Route path="/" element={<Create />} />
          <Route path="/create" element={<Create />} />
          <Route path="/read" element={<Read />} />
          <Route path="/update" element={<Update />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
