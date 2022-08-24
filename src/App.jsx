import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  

  return (
    <div>
      <Routes>
        <Route path='/' exact element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
