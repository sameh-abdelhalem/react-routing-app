import "bootstrap/dist/css/bootstrap.min.css";
import About from "./components/About";
import { BrowserRouter as Routing, Switch, Route } from "react-router-dom";
import Shopping from "./components/Shopping";
import Home from "./components/Home";
import Product from "./components/Product";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Routing>
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shopping" component={Shopping} />
        <Route path="/product/:id" component={Product} />
      </Switch>
      <Footer />
    </Routing>
  );
}

export default App;
