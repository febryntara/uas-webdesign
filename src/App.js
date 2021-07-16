// LIBRARY
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Carousel from "./components/carousel/Carousel";
// COMPONENT
import Navbar from './components/nav/Navbar'
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Carousel />
        </Route>
        <Route path="/products">
          <ProductList />
        </Route>
        <Route exact path="/products-:id">
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
