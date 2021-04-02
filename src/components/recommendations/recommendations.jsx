import axios from 'axios';
import React, { Component } from 'react';
import { getMovieRecommendationsUrl } from '../../constants/constants'
import Image from '../image/image'
import './recommendations.css'
import { Link } from 'react-router-dom'

class Recommendations extends Component {
    state = {
        recommendations: {}
    }

    componentDidMount() {
        const movieId = this.props.movieId;
        axios.get(getMovieRecommendationsUrl(movieId))
            .then((res) => {
                this.setState({ recommendations: res.data })
                console.log('Recommendations - ', res.data);
            })
    }

    render() {
        const { recommendations } = this.state
        if (recommendations.results) {
            return (
                <div className="recommendations_component">
                    <div className="recommendations_list" >
                        {recommendations['results'].map((recommendation) => (
                            <div className="recommendations_info" key={recommendation.id} >
                                <div className="recommendationsCard" >
                                    <div className="recommendations_image">
                                        <Link to={`/movie/${recommendation.id}`} >
                                            <Image height={'10%'} width={'60%'} imageType={'small'} url={recommendation.poster_path} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );

        } else {
            return (<div>Loading data....</div>)
        }
    }
}

export default Recommendations;