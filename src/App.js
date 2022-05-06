import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
// Way To many imports
import Login from './Components/Account/Login/Login';
import Register from './Components/Account/Register/Register';
import RequireAuth from './Components/Account/RequireAuth/RequireAuth';
import AddItem from './Components/AddItem/AddItem';
import Awards from './Components/Awards/Awards';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import ManageInv from './Components/ManageInv/ManageInv';
import ManageItem from './Components/ManageItem/ManageItem';
import MyItems from './Components/MyItems/MyItems';
import Header from './Components/Navbar/Navbar';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        {/* Routes */}
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/inventory/:itemId" element={<RequireAuth><ManageItem></ManageItem></RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/inventory" element={<RequireAuth><ManageInv></ManageInv></RequireAuth>}></Route>
        <Route path="/addItem" element={<RequireAuth><AddItem></AddItem></RequireAuth>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/myItems" element={<RequireAuth><MyItems></MyItems></RequireAuth>}></Route>
        <Route path="/awards" element={<Awards></Awards>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
