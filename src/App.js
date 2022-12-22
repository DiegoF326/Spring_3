import "./App.css";
import CompNatbar from "./configuracion/Natbar";
import { BrowserRouter as Router } from "react-router-dom";
import CompRutas from "./configuracion/Rutas";
import CompFooter from "./configuracion/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <CompNatbar />
        <CompRutas />
        <CompFooter/>
      </Router>
    </div>
  );
}

export default App;
