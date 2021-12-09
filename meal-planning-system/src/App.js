import Home from './pages/Home';
import './App.css';
import AppNavbar from "./components/Navbar"

function App() {

  return (
    <div className="jumbotron">
      <AppNavbar />
      <Home />
    </div>
  );
}

export default App;
