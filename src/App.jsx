import "./App.css";
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <h2>
          <Link to="/">Movies list</Link>
        </h2>
      </nav>
    </div>
  );
}

export default App;
