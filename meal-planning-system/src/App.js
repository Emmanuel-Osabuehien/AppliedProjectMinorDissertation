import Home from './pages/Home';
import './App.css';
import AppNavbar from "./components/Navbar"
import AppContext from './context';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ErrorPage from './pages/404/404';
import Login from './pages/Login';
import SignUp from './pages/SignUp/SignUp';

function App() {

  return (
    <Router>
      <AppContext>
          <AppNavbar />
          <Switch>
            <Route exact path="/">
            <Home />
            </Route>
            <Route exact path="/login">
            <Login />
            </Route>
            <Route exact path="/register">
            <SignUp />
            </Route>
            <Route>
            <ErrorPage />
            </Route>
          </Switch>
      </AppContext>
    </Router>
  );
}

export default App;
