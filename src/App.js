import "./App.css";

import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Company from "./component/company";
import Info from "./component/info";
import Management from "./component/management";
import Customer from "./component/customer";
import Product from "./component/product";
import Brand from "./component/brand";

export function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link>
          <Link to="company">Company</Link>
          <Link to="info">Info</Link>
          <Link to="management">Management</Link>
          <Link to="brand">Brand</Link>
          <Link to="product">Product</Link>
          <Link to="customer">Customer</Link>
        </nav>
        <Routes>
          <Route path="/" element={<start />} />
          <Route path="company/" element={<Company />} />
          <Route path="info/" element={<Info />} />
          <Route path="management/" element={<Management />} />
          <Route path="brand/" element={<Brand />} />
          <Route path="product/" element={<Product />} />
          <Route path="customer/" element={<Customer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
