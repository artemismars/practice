import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AboutUs from "./pages/aboutus";
import Increment from "./pages/increment";
import Todo from "./pages/todo";
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
