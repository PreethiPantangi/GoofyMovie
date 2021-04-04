import React, { Component } from 'react';
import './cast.css'
import Image from '../image/image'
import Male from '../../male.png'
import Female from '../../female.jpg'

class Cast extends Component {
    state = {
        credits: {}
    }

    render() {
        const { data } = this.props;
        console.log(data['cast']);
        if (data['cast']) {
            return (
                <div>
                    <div className="cast_list textColor" >
                        {data['cast'].map((cast) => (
                            <div className="cast_info" key={cast.id} >
                                <div className="castCard" >
                                    <div className="cast_image">
                                        {/* gender 2 -male ; gender 1 - female */}
                                        {cast.profile_path !== null ?
                                            <Image height={'10%'} width={'60%'} imageType={'small'} url={cast.profile_path} /> :
                                            <div>
                                                {cast.gender === 2 ?
                                                    <img height={'10%'} width={'60%'} src={Male} /> :
                                                    <img height={'10%'} width={'60%'} src={Female} />}
                                            </div>
                                        }
                                    </div>
                                    <p className="textColor">{cast.original_name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )
        } else {
            return (<div>No data</div>)
        }
    }
}

export default Cast;