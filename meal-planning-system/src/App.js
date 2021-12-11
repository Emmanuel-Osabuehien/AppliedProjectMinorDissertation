import Home from './pages/Home';
import './App.css';
import AppNavbar from "./components/Navbar"
import AppContext, { MyContext } from './context';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ErrorPage from './pages/404/404';
import Login from './pages/Login';
import SignUp from './pages/SignUp/SignUp';
import { useContext } from 'react';

function App() {

  const { user } = useContext(MyContext);

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
          <Route>
            <ErrorPage />
          </Route>
        </Switch>
     </Router>
  );
}

export default App;
