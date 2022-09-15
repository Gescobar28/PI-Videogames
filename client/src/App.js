import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import DetailVideogame from './components/DetailVideogame/DetailVideogame';
import CreateVideogame from './components/CreateVideogame/CreateVideogame'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          
          {/* <Route exact path='/videogames/:id' component={DetailVideogame}></Route> */}
          <Route exact='/videogames' component={Home}></Route>
          {/* <Route exact='/create' component={CreateVideogame}></Route> */}
          <Route path='/' component={LandingPage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
