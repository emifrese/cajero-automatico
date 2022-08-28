import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Operations from "./pages/Operations";
import { AuthProvider } from "./store/AuthProvider";
import RutaProtegida from "./layout/RutaProtegida";
import PageWrapper from "./layout/PageWrapper";
import Extractions from "./pages/Extractions";

function App() {
  return (
    <div className="h-screen flex items-center p-20">
      <PageWrapper>
        <AuthProvider>
          <Routes>
            <Route path="/" exact element={<Login />} />

            <Route path="/account" element={<RutaProtegida />}>
              <Route path="/account" index element={<Operations />} />
              <Route path='/account/extraction' element={<Extractions />} />
            </Route>
          </Routes>
        </AuthProvider>
      </PageWrapper>
    </div>
  );
}

export default App;
