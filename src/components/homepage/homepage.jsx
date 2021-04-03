import React, { Component } from 'react';
import Genre from '../genre/genre'
import MoviesOther from '../movies_/movies_'
import SearchComponent from '../search/search'
import './homepage.css'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div className="homepage_component">
                <div className="homepage_component_fixed_height_search" >
                    <SearchComponent />
                </div>
                <div className="homepage_component_fixed_height_genre" >
                    <Genre />
                </div>
                <div className="homepage_component_fixed_height">
                    <MoviesOther name={'Popular'} />
                </div>
                <div className="homepage_component_fixed_height">
                    <MoviesOther name={'Most Rated'} />
                </div>
                <div className="homepage_component_fixed_height">
                    <MoviesOther name={'Now Playing'} />
                </div>
                <div className="homepage_component_fixed_height">
                    <MoviesOther name={'Upcoming'} />
                </div>
            </div>
        );
    }
}

export default HomePage;