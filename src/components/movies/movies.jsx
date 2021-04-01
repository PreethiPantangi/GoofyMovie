import axios from 'axios';
import React, { Component } from 'react';
import { getMovieByGenreIdUrl, getApiKey } from '../../constants/constants'
import Image from '../image/image'
import './movies.css'

class Movies extends Component {
    state = {
        movies: {}
    }

    genreId = 0;

    constructor(props) {
        super(props)
        this.genreId = props.location.state.id
    }

    componentDidMount() {
        axios.get(`${getMovieByGenreIdUrl()}${this.genreId}/movies?api_key=${getApiKey()}`)
            .then(res => {
                this.setState({ movies: res.data })
            })
    }

    getMovieData = (movieId) => {
        console.log(movieId)
    }

    render() {
        const { movies } = this.state;
        if (movies.results) {
            console.log(movies.results)
            return (
                <div className="genre_movies" >
                    <div className="col-12" >
                        {movies.results.map((data) =>
                            <div key={data.id} className="row" >
                                <div className="col-2" onClick={() => this.getMovieData(data.id)} >
                                    <Image url={data.poster_path} />
                                    <div>{data.original_title}</div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div>Data</div>
            )
        }
    }
}

export default Movies;