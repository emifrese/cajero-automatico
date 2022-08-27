import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <div className="h-screen flex items-center p-20">
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
