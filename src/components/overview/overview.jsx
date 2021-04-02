import React, { Component } from 'react';
import './overview.css'

class Overview extends Component {
    state = {
    }

    componentDidMount() {
    }

    render() {
        const movieData = this.props.movieData;
        return (
            <div className="overview_component">
                <p>{movieData.overview}</p>
                <div>
                    <div className="left_align">
                        <b>Genre</b>
                    </div>
                    <div className="right_align">
                        <div className="genreName" >
                            {movieData.genres ? movieData.genres.map((genre) => <p key={genre.id} >{genre.name}&nbsp;</p>) : null}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="left_align">
                        <b>Release Date</b>
                    </div>
                    <div className="right_align">
                        <div className="genreName" >
                            {movieData.release_date}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Overview;