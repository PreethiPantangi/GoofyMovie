import React, { Component } from 'react';
import { getGenre } from '../../constants/genre_movie_tv'
import { Link } from 'react-router-dom'
import './genre.css'

class Genre extends Component {
    state = {
        genre: {},
        genreId: 0
    }

    componentDidMount() {
        this.setState({ genre: getGenre() })
    }

    render() {
        const { genre } = this.state;
        return (
            <div>
                {genre.movie ? <div>
                    <h3 className="title" >Genres</h3>
                    <div className="genres_list" >
                        {genre['movie'].map((genre) => (
                            // <Link key={genre.id} to={`/genre/${genre.id}`} params={{ genre: genre.name }}>
                            <Link key={genre.id} to={`/genre/${genre.id}/${genre.name}`} >
                                <div className="genre_details" >
                                    <img className="image" style={{ width: 200, height: 130 }} src={genre.poster_path} alt={genre.name} />
                                    <div className="genre_name">{genre.name}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div> : null}
            </div>
        )
    }
}

export default Genre;