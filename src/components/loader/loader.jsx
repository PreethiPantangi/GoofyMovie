import React, { Component } from 'react';
import { LoadingOutlined } from '@ant-design/icons';

class Loader extends Component {
    state = {}
    render() {
        return (<LoadingOutlined style={{ color: 'blue' }} />);
    }
}

export default Loader;