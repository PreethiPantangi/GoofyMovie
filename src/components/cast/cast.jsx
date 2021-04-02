import axios from 'axios';
import React, { Component } from 'react';
import { getCreditsUrl } from '../../constants/constants'
import './cast.css'
import Image from '../image/image'

class Cast extends Component {
    state = {
        credits: {}
    }

    componentDidMount() {
        const movieId = this.props.movieId;
        axios.get(`${getCreditsUrl(movieId)}`)
            .then((res) => {
                this.setState({ credits: res.data })
            })
    }

    render() {
        const { credits } = this.state;
        if (credits.cast) {
            return (
                <div className="cast_list" >
                    {credits['cast'].map((cast) => (
                        <div className="cast_info" key={cast.id} >
                            <div className="castCard" >
                                <div className="cast_image">
                                    <Image height={'10%'} width={'60%'} imageType={'small'} url={cast.profile_path} />
                                </div>
                                <p className="textColor" style={{ textAlign: "center" }}>{cast.original_name}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )
        } else {
            return (<div>No data</div>)
        }
    }
}

export default Cast;