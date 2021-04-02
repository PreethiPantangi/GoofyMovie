import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getMovieByGenreIdUrl } from '../../constants/constants'
import Image from '../image/image'
import './movies.css'


class Movies extends Component {
    state = {
        movies: {},
        genreName: ''
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
        this.setState({ genreName: this.props.match.params.genreName })
    }

    render() {
        const { movies, genreName } = this.state;
        if (movies.results) {
            return (
                <div className="movies_container">
                    <h3 className="title">{genreName}</h3>
                    <div className="movies_list" >
                        {movies.results.map((data) => (
                            <Link key={data.id} to={`/movie/${data.id}`}>
                                <div className="movie_info" key={data.id} >
                                    <div className="movieCard" >
                                        <div className="movie_image">
                                            <Image height={'300px'} width={'100%'} imageType={'small'} url={data.poster_path} />
                                        </div>
                                        <p>{data.original_title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
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