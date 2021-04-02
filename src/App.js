import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage/homepage';
import Movies from './components/movies/movies';
import MovieInfo from './components/movieinfo/movieinfo'
import 'antd/dist/antd.css';

function App() {
  return (
    <BrowserRouter >
      {/* <button onClick={this.goBack} >Go Back</button> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/genre/:genreId" component={Movies} />
        <Route exact path="/movie/:movieId" component={MovieInfo} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
