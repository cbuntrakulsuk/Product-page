import "./App.css";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Desc from "./Desc";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <Menu /> */}
      <Hero />
      <Desc />
    </div>
  );
}

export default App;
