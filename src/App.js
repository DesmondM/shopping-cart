import './App.scss';
import FeaturedCollection from './components/fearured-collection/FeaturedCollection';
import Footer from './components/footer/Footer';
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
      <FeaturedCollection/>
      <Footer/>
      </header>
    </div>
  );
}

export default App;
