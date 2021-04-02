import axios from 'axios';
import React, { Component } from 'react';
import { getMovieInfoUrl, getCreditsUrl } from '../../constants/constants'
import Image from '../image/image'
import './movieinfo.css'

class MovieInfo extends Component {
    state = {
        movieData: {}
    }

    componentDidMount() {
        axios.get(`${getMovieInfoUrl(this.props.match.params.movieId)}`)
            .then((res) => {
                this.setState({ movieData: res.data })
                axios.get(`${getCreditsUrl(this.props.match.params.movieId)}`)
                    .then((res) => {
                        console.log(res.data.cast)
                    })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        console.log('Movies info - ', this.state.movieData);
        const { movieData } = this.state;
        let year = typeof movieData.release_date === 'string' ? movieData.release_date.split("-")[0] : ""
        console.log(year)
        return (
            <div className="movieInfo_component">
                {movieData.poster_path ? <Image imageType={'large'} url={movieData.backdrop_path} /> : null}
                <div className="movieInfo_data" >
                    <div className="movieInfo_left" >
                        {movieData.poster_path ? <Image imageType={'small'} url={movieData.poster_path} /> : null}
                    </div>
                    <div className="movieInfo_right" >
                        <h2>{movieData.original_title}({year})</h2>
                        <div className="movieInfo_left" >
                            {movieData.genres ? movieData.genres.map((genre) => <p className="genreName" key={genre.id} >{genre.name}&nbsp;</p>) : null}
                        </div>
                        <div className="movieInfo_right">&#9679;{movieData.runtime}</div>
                    </div>
                </div>
                <div className="movieInfo_details">
                    <div className="movieInfo_overview">
                        <h3>Overview</h3>
                        <p>{movieData.overview}</p>
                    </div>
                    <p><span>Status</span> {movieData.status}</p>
                    <p><span>Budget</span> ${movieData.budget}</p>
                    <div className="movieInfo_cast">
                        <h3>Cast</h3>

                    </div>
                </div>
            </div>
        );
    }
}

export default MovieInfo;