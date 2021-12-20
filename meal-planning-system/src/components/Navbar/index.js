import React, { useContext } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { MyContext } from '../../context';
import axios from '../../Axios';
import { useHistory } from 'react-router-dom';

function AppNavbar() {
  const history = useHistory();
  const { user, setUser } = useContext(MyContext);
  const handleLogout = () => {
    axios.post("/logout").then(() => {
      localStorage.removeItem("token");
      setUser(null);
      history.replace("/");
    });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand href="#home">
            MealPrepPro
    </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {!user && (
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer>
            </Nav>
          )}
          {user && (
          <>
          <LinkContainer to="/my-meals">
                <Nav.Link>Meals</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/bmi">
                <Nav.Link>BMI</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/shopping">
                <Nav.Link>Shopping List</Nav.Link>
              </LinkContainer>{" "}
              <LinkContainer to="/requirements">
                <Nav.Link>Requirements</Nav.Link>
              </LinkContainer>{" "}
          <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default AppNavbar;
