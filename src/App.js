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
  const [count, setCount] = useState(1);
  const getProduct = (id) => {
    ProductAPI.detail(id)
      .then((res) => {
        // if (bag.length === 0) {
        //   setCount(1);
        //   setBag([
        //     ...bag,
        //     {
        //       index: bag.length,
        //       judul: res.judul,
        //       price: res.price,
        //       image: res.image,
        //       count: count,
        //     },
        //   ]);
        //   console.log("data baru");
        // } else {
        //   setCount((prevCount) => prevCount + 1);
        //   if (res.judul === bag[bag.length - 1].judul) {
        //     console.log("data lama");
        //     const updated = bag
        //       .filter((data) => data.judul !== res.judul)
        //       .map((data) => data);
        //     setBag([
        //       ...updated,
        //       {
        //         index: bag.length,
        //         judul: res.judul,
        //         price: res.price,
        //         image: res.image,
        //         count: count,
        //       },
        //     ]);
        //   }
        // }
        setBag([
          ...bag,
          {
            index: bag.length,
            judul: res.judul,
            price: res.price,
            image: res.image,
            count: count,
          },
        ]);
      })
      .catch((err) => console.log(err));
    alert("Product Added! Check Your BAG!");
  };
  const delProduct = (id) => {
    const dialog = window.confirm(
      `Are you sure want to delete ${bag[id].judul}?`
    );
    if (dialog === true) {
      const renew = bag
        .filter((data) => data.index !== id)
        .map((data) => {
          return data;
        });
      setBag([...renew]);
    }
  };
  const countProduct = () => {};
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
          <ProductDetails getProduct={getProduct} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/bag">
          <Bag products={bag} delProduct={delProduct} />
        </Route>
        <Route
          path="/contact-us"
          component={() => {
            window.location.href =
              "https://api.whatsapp.com/send?phone=6281353783536&text=Saya%20mau%20bertanya%20min";
            return null;
          }}
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
