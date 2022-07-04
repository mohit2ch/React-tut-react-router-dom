import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import Welcome from "./component/Welcome";
import Products from "./component/Products";
import Mainheader from "./component/Mainheader";
import ProductDetails from "./component/ProductDetails";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Mainheader />
        <main>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/welcome"></Redirect>
            </Route>
            <Route path="/welcome">
              <Welcome />
            </Route>
            <Route path="/products" exact>
              <Products />
            </Route>
            <Route path="/products/:product_id">
              <ProductDetails />
            </Route>
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
