import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import Movies from './components/movies/movies';
import MovieInfo from './components/movieinfo/movieinfo'
import 'antd/dist/antd.css';
import HomePage from './components/homepage/homepage';

function App() {
  return (
    <HashRouter >
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/genre/:genreId/:genreName" component={Movies} />
        <Route exact path="/movie/:movieId" component={MovieInfo} />
      </Switch>
    </HashRouter>
  );
}

export default App;
