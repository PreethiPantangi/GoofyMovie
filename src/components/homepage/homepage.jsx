import React, { Component } from 'react';
import { getGenre } from '../../constants/genre_movie_tv'
import './homepage.css'
import { Redirect } from 'react-router-dom'

class HomePage extends Component {
    state = {
        genre: {},
        isSelectedGenre: false,
        genreId: 0
    }

    componentDidMount() {
        this.setState({ genre: getGenre() })
    }

    showMoviesList = (genreId) => {
        this.setState({ isSelectedGenre: true })
        this.setState({ genreId })
    }

    render() {
        const { genre, isSelectedGenre } = this.state;
        if (isSelectedGenre) {
            return <Redirect to={{
                pathname: "/genre",
                state: { id: this.state.genreId }
            }}> </Redirect>;
        }
        if (genre.movie) {
            return (
                <div>
                    <div className="home__wrapper" >
                        <div className="genres" >
                            <h2>Genres</h2>
                            {genre['movie'].map((genre) =>
                                <div key={genre.id} className="genres__row" onClick={() => this.showMoviesList(genre.id)} >
                                    <div>
                                        <img className="image" src={genre.poster_path} alt={genre.name} />
                                        <p className="genres__name" >{genre.name}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div>Else</div>
            )
        }
    }
}

export default HomePage;