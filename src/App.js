import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Header>
      </Header>
      <Portfolio></Portfolio>
      <About></About>
    </div>
  );
}

export default App;
