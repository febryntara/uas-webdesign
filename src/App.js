// LIBRARY
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
// COMPONENT
import Navbar from "./components/nav/Navbar";
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
import ProductAPI from "./config/productAPI/ProductAPI";
import About from "./pages/about/About";
import Bag from "./pages/bag/Bag";
import MainPage from "./pages/mainPage/MainPage";
function App() {
  const [bag, setBag] = useState([]);
  const getProduct = (id) => {
    ProductAPI.detail(id)
      .then((res) => {
       setBag([...bag, {index: bag.length, judul: res.judul, price: res.price, image: res.image}])
      })
      .catch((err) => console.log(err));
      alert("Product Added! Check Your BAG!")
  }
  const delProduct = (id) => {
    const dialog = window.confirm(`Are you sure want to delete ${bag[id].judul}?`);
    if(dialog === true){
      const renew = bag.filter((data) => data.index !== id).map((data)=> {return data});
      setBag([...renew]);
    }
    
  }
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route exact path="/products-:id">
          <ProductDetails getProduct={getProduct}/>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bag">
          <Bag products={bag} delProduct={delProduct}/>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
