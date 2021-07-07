// LIBRARY
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// COMPONENT
import ProductDetails from "./components/product/ProductDetails";
import ProductList from "./components/product/ProductList";
function App() {
  
  return (
    <Router>
      <Switch>
        <Route path="/" exact><h2>hal utama</h2></Route>
        <Route path="/products"><ProductList /></Route>
        <Route exact path="/products-:id"><ProductDetails /></Route>
      </Switch>
    </Router>
  );
}

export default App;
