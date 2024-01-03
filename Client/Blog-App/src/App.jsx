import "./App.css";
import Error from "./Pages/Error";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Blogs from "./components/Blogs";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <main>
        <Header />
        <Blogs />
      </main>
    </>
  );
}

export default App;
