import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home/Home";
import Header from './Components/Header/Header'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
