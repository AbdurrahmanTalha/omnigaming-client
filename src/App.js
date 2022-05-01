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
import ManageInv from './Components/ManageInv/ManageInv';
import AddItem from './Components/AddItem/AddItem';
import Blogs from './Components/Blogs/Blogs';
import NotFound from './Components/NotFound/NotFound';
import 'react-toastify/dist/ReactToastify.css';
import MyItems from './Components/MyItems/MyItems';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory/:itemId" element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<RequireAuth><ManageInv></ManageInv></RequireAuth>}></Route>
        <Route path="/addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={<MyItems></MyItems>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
