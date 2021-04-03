import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './carousel.css'
import Image from '../image/image'

class Carousel extends Component {
    state = {}

    render() {
        const name = this.props.name;
        const data = this.props.data;
        const path = this.props.path;
        if (data) {
            return (
                <div className="carousel_component">
                    <h3 className="title" >{name}</h3>
                    <div className="carousel_list" >
                        {data.map((d) => (
                            <div className="carousel_info" key={d.id} >
                                <div className="carouselCard" >
                                    <div className="carousel_image">
                                        <Link key={d.id} to={path === 'genre' ? `/genre/${d.id}/${d.name}` : `/movie/${d.id}`} >
                                            <Image height={'10%'} width={'60%'} imageType={'small'} url={d.poster_path} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (<div>Loading Data....</div>)
        }
    }
}

export default Carousel;