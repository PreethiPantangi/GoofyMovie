import React, { Component } from 'react';
import { getGenre } from '../../constants/genre_movie_tv'
import './homepage.css'
import { Link } from 'react-router-dom';


class HomePage extends Component {
    state = {
        genre: {},
        genreId: 0
    }

    componentDidMount() {
        this.setState({ genre: getGenre() })
    }

    render() {
        const { genre } = this.state;
        if (genre.movie) {
            return (
                <div className="homepage_container">
                    <h3 className="title" >Genres</h3>
                    <div className="genres_list" >
                        {genre['movie'].map((genre) => (
                            <Link key={genre.id} to={`/genre/${genre.id}`}>
                                <div>
                                    <img className="image" src={genre.poster_path} alt={genre.name} />
                                    <div className="genre_name">{genre.name}</div>
                                </div>
                            </Link>
                        ))}
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