import './App.scss';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import MainSection from './components/main-section/MainSection';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Header/>
      <Hero/>
      <MainSection/>
      </header>
    </div>
  );
}

export default App;
