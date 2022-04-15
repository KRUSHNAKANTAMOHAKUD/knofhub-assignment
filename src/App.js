import "./App.css";
import Event from "./components/Event/Event";
import Header from "./components/Header/Header";
import SearchEvent from "./components/SearchEvent/SearchEvent";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchEvent />
      <Event />
    </div>
  );
}

export default App;
