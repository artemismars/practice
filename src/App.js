import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";
import AboutUs from "./pages/aboutus";
import Increment from "./pages/increment";
import Todo from "./pages/todo";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <Router>
      <div className="App">
        <Home />
        <Switch>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/increment">
            <Increment num="1" />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
