import React, { Component } from 'react';
import './image.css'
import { getImageUrl } from '../../constants/constants'

class Image extends Component {
    state = {
        imageUrl: '',
        imageType: ''
    }

    componentDidMount() {
        if (this.props.imageType === 'large') {
            let imageUrl = getImageUrl('1280');
            imageUrl += this.props.url;
            this.setState({ imageUrl })
            this.setState({ imageType: this.props.imageType })
        } else {
            let imageUrl = getImageUrl('500');
            imageUrl += this.props.url;
            this.setState({ imageUrl })
            this.setState({ imageType: this.props.imageType })
        }
    }

    render() {
        const { imageUrl } = this.state;
        return (
            <div className="image_container">
                {this.props.imageType === 'large' ? <div>
                    <img src={imageUrl} alt={imageUrl} className="image" width="100%" height="500px" />
                </div> : <div>
                    <img src={imageUrl} alt={imageUrl} className="imageSmall" height="400px" />
                </div>}
            </div>
        );
    }
}

export default Image;