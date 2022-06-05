import logo from './logo.svg';
import Landing from "./sections/Landing.js"
import Tracks from "./sections/Tracks.js"
import FAQ from './sections/FAQ';
import './App.css';
import About from './sections/About';


function App() {
  return (
    <div className="App">
      <Landing />
      <About />
      <Tracks />
      <FAQ />
    </div>
  );
}

export default App;
