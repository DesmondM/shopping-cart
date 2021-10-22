import {Switch, Route} from 'react-router-dom'
import './App.scss';
import HomePage from './components/HomePage';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path ="/" component={HomePage}
      </Switch>
    </div>
  );
}

export default App;
