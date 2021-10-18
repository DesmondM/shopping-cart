import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Hero/>
      </header>
    </div>
  );
}

export default App;
