import logo from "./logo.svg";
import "./App.css";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Navbar,
  Nav,
  Jumbotron,
} from "react-bootstrap";
import Posts from "./Components/Posts";
import Signup from "./Components/Signup"
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAmericanSignLanguageInterpreting, faCamera } from "@fortawesome/free-solid-svg-icons";
import Fuse from "fuse.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
  const [value, setval] = useState("");
  const [query, setq] = useState([]);
  const [vue, setvue] = useState("");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  var temparr;
  const fuse = new Fuse(query);
  const result = fuse.search(vue);
  console.log(result);

  function Onmysubmit() {
    if (value === "") {
      alert("Enter a question to submit");
    } else {
      temparr = [...query, value];
      setq(temparr);
      setval("");
      setShow(false);
    }
  }
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg" id="nav">
          <Navbar.Brand href="#home">Ourquery</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/signup">Signup</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Container fluid id="searchcont">
              <h2 id="searchhead">How can we help you </h2>
              <input
                type="search"
                id="mysearch"
                placeholder="Search for a Question"
                value={vue}
                onChange={(e) => setvue(e.target.value)}
              ></input>
            </Container>
            <Container fluid>
              <Jumbotron>
                <Container>
                  <h3>Could not find your question ?</h3>
                  <Button variant="primary" onClick={handleShow}>
                    Ask a Question
                  </Button>

                  <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Ask your Question</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Container id="cont">
                        <Row
                          id="myrow1"
                          className="d-flex justify-content-center"
                        >
                          <Col md={10} id="col1">
                            <form className="d-flex flex-column align-items-center">
                              <textarea
                                value={value}
                                onChange={(e) => setval(e.target.value)}
                                placeholder="Ask a question"
                                id="txt"
                                required
                              ></textarea>
                              <FontAwesomeIcon
                                icon={faCamera}
                                size="2x"
                                id="cam"
                              ></FontAwesomeIcon>
                            </form>
                          </Col>
                        </Row>
                      </Container>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                      <Button type="submit" onClick={() => Onmysubmit()}>
                        Submit
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </Container>
              </Jumbotron>
            </Container>

            <Posts query={query} result={result} vue={vue}></Posts>
          </Route>
          <Route path="/signup">
           
           <Signup></Signup>
          </Route>
         
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
