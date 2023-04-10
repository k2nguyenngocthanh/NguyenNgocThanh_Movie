import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import LoginPage from "./Pages/LoginPage/LoginPage";
import DetailPage from "./Pages/DetailPage/DetailPage";
import Layout from "./Layout/Layout";
import BookingPage from "./Pages/BookingPage/BookingPage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import RegisterPage from "./Pages/LoginPage/RegisterPage";
import Spinner from "./Components/Spinner/Spinner";



function App() {
  return (
    <div >
   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}></Route>
          <Route path="/login" element={<Layout Component={LoginPage}/>}></Route>
          <Route path="/register" element={<Layout Component={RegisterPage}/>}></Route>
          <Route path='/detail/:id' element={<Layout Component={DetailPage}/>} />
          <Route path='/booking/:id' element={<Layout Component={BookingPage}/>} />
          <Route path='*' element={ <Layout Component={NotFoundPage}/>} />
        

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
