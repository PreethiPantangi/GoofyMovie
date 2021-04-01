import React, { Component } from 'react';
import './image.css'
import { getImageUrl } from '../../constants/constants'

class Image extends Component {
    state = {
        imageUrl: ''
    }

    componentDidMount() {
        let imageUrl = getImageUrl();
        imageUrl += this.props.url;
        this.setState({ imageUrl })
    }

    render() {
        const { imageUrl } = this.state;
        return (<div>
            <img src={imageUrl} alt={imageUrl} className="image" ></img>
        </div>);
    }
}

export default Image;