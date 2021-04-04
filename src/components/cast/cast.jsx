import React, { Component } from 'react';
import './cast.css'
import Image from '../image/image'

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
                                        <Image height={'10%'} width={'60%'} imageType={'small'} url={cast.profile_path} />
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