import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { Main } from "./test";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
