import Home from './pages/Home';
import './App.css';
import AppNavbar from "./components/Navbar"
import { MyContext } from './context';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ErrorPage from './pages/404/404';
import Login from './pages/Login';
import SignUp from './pages/SignUp/SignUp';
import { useContext, useEffect } from 'react';
import axios from './Axios';
import Favorites from './pages/Favorites/Favorites';

function App() {

  const { user, setUser } = useContext(MyContext);
  useEffect(() => {
    axios.post("/auto-login").then(({data}) => setUser(data))
  }, [])

  return (
    <Router>
      <AppNavbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {!user && (
            <>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <SignUp />
              </Route>
            </>
          )}
          {user && (
            <Route exact path="/my-meals">
              <Favorites />
            </Route>
          )}
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
     </Router>
  );
}

export default App;
