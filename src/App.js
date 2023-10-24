// import logo from './logo.svg';
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CitLogin from "./CitLogin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/citizen-login" element={<CitLogin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
