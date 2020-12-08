import logo from "./logo.svg";
import "./App.css";

import Home from "./pages/home";

import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Form, FormControl, Nav, Navbar, Button } from "react-bootstrap";

import AboutUs from "./pages/aboutus";
import Increment from "./pages/increment";
import Todo from "./pages/todo";
import ContactMe from "./pages/contactme";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/aboutus"}>
              AboutUs
            </Nav.Link>
            <Nav.Link as={Link} to={"/increment"}>
              Increment
            </Nav.Link>
            <Nav.Link as={Link} to={"/todo"}>
              Todo
            </Nav.Link>
            <Nav.Link as={Link} to={"/contactme"}>
              ContactMe
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Navbar>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/aboutus">
            <AboutUs />
          </Route>
          <Route path="/increment">
            <Increment num="1" />
          </Route>
          <Route path="/todo">
            <Todo />
          </Route>
          <Route path="/contactme">
            <ContactMe />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
