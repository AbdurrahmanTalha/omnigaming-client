
import './App.css';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Register from './Components/Account/Register/Register';
import { ToastContainer } from 'react-toastify';
import RequireAuth from './Components/Account/RequireAuth/RequireAuth';
import ManageItem from './Components/ManageItem/ManageItem';
import Login from './Components/Account/Login/Login';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory/:itemId" element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>

      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
