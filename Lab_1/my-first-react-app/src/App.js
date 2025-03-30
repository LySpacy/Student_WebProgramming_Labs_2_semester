import logo from './logo.svg';
import './App.css';
import Greeting from "./Greeting";
import CurrentDateTime from "./CurrentDateTime";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Greeting name="Мир" />
          <CurrentDateTime />
      </header>
    </div>
  );
}

export default App;
