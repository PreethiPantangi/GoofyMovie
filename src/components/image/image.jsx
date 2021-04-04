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
        // console.log(imageUrl);
        return (
            <div>
                {this.props.height && this.props.width ? <img src={imageUrl} alt={imageUrl} height={this.props.height} width={this.props.width} /> : <img src={imageUrl} alt={imageUrl} />}
            </div>
        );
    }
}

export default Image;