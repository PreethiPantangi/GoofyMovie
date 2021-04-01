import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homepage';
import Movies from './components/movies/movies';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/genre" component={Movies} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
