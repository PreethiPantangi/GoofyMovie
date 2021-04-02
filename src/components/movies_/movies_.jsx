import axios from 'axios';
import React, { Component } from 'react';
import './movies_.css'
import { getPopularMoviesUrl, getNowPlayingMoviesUrl, getUpcomingMoviesUrl, getTopRatedMoviesUrl } from '../../constants/constants'
import Carousel from '../carousel/carousel'

class MoviesOther extends Component {
    state = {
        movies: {}
    }

    componentDidMount() {
        if (this.props.name === 'Popular') {
            this.callApi(getPopularMoviesUrl())
        } else if (this.props.name === 'Most Rated') {
            this.callApi(getTopRatedMoviesUrl())
        } else if (this.props.name === 'Now Playing') {
            this.callApi(getNowPlayingMoviesUrl())
        } else if (this.props.name === 'Upcoming') {
            this.callApi(getUpcomingMoviesUrl())
        }
    }

    callApi = (url) => {
        axios.get(url)
            .then((res) => {
                this.setState({ movies: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { movies } = this.state;
        if (movies.results) {
            return (<div>
                <Carousel name={this.props.name} data={movies.results} path={'movie'} />
            </div>);
        } else {
            return (<div>Loading Data...</div>)
        }
    }
}

export default MoviesOther;