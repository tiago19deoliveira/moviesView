import Navbar from "./components/Navbar";
import "./App.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Navbar />
      <h2>Super Movies Lib</h2>

      <Outlet />
    </div>
  );
}

export default App;
