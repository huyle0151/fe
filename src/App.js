import './App.css';
import Home from './Components/Home';
import Admin from './Components/Admin/admin';
import Products from "./Components/Products";
import DetailProduct from './Components/DetailProduct';
import Cart from './Components/Cart';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/sanpham" element={<Products />} />
          <Route path="/sanpham/:searchterm" element={<Products />} />
          
          <Route path="/sanpham/danhmuc/:idDanhMuc" element={<Products/>} />
          <Route path="/sanpham/detail/:idSanPham" element={<DetailProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
