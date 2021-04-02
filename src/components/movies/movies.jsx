import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovieByGenreIdUrl } from '../../constants/constants'
import Image from '../image/image'
import './movies.css'

class Movies extends Component {
    state = {
        movies: {}
    }

    genreId = 0;

    constructor(props) {
        super(props)
        this.genreId = props.match.params.genreId
    }

    componentDidMount() {
        axios.get(`${getMovieByGenreIdUrl(this.genreId)}`)
            .then(res => {
                this.setState({ movies: res.data })
            })
    }

    render() {
        const { movies } = this.state;
        if (movies.results) {
            return (
                <div className="genre_movies" >
                    <div className="col-12" >
                        {movies.results.map((data) =>
                            <div key={data.id} className="row" >
                                <Link to={`/movie/${data.id}`} >
                                    <div className="col-2" >
                                        <Image imageType={'small'} url={data.poster_path} />
                                        <div>{data.original_title}</div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            );
        } else {
            return (
                <div>Loding Data...</div>
            )
        }
    }
}

export default Movies;