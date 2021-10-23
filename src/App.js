import {Switch, Route} from 'react-router-dom'
import './App.scss';
import HomePage from './components/HomePage';
import NotFound from './components/NotFound';
import Shop from './components/pages/shop/Shop';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={HomePage}/>
        <Route path ="/shop" component={Shop}/>
        <Route path = '*' component={NotFound}/>
      </Switch>
    </div>
  );
}

export default App;
