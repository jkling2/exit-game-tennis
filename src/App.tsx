import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Routes, Route, Navigate } from "react-router-dom";
import logo from "./logo.svg";
import './App.css';
import Rules from './pages/Rules';
import Game from './pages/Game';

function App() {
  return (
    <div className="App">
      <div id="navbar" className="ui fixed inverted main menu">
        <Navbar fixed="top" bg="dark" variant="dark">
          <Navbar.Brand>
            &nbsp;&nbsp;
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="App-logo d-inline-block align-top"
            />
            &nbsp;&nbsp;ExitGame
          </Navbar.Brand>
          <Navbar.Toggle />
          <Nav>
            <Nav.Item>
              <LinkContainer
                activeClassName="active"
                to="/intro"
              >
                <Nav.Link>{"Intro"}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer
                activeClassName="active"
                to="/game"
              >
                <Nav.Link>{"Game"}</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Navbar>
        <main id="content" className="ui container">
          <Routes>
            <Route element={<Rules />} path="/intro" />
            <Route element={<Game />} path="/game" />
            <Route element={<Navigate to="/intro" />} path="/" />
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;
