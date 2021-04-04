import React, { Component } from 'react';
import Genre from '../genre/genre'
import MoviesOther from '../movies_/movies_'
import SearchComponent from '../search/search'
import { Row, Col } from 'antd'
import './homepage.css'

class HomePage extends Component {
    state = {}
    render() {
        return (
            <div className="homepage_component textColor">
                <Row>
                    <Col span={24} className="homepage_component_search" >
                        <SearchComponent />
                    </Col>
                </Row>
                <Row className="homepage_component_fixed_height_genre">
                    <Col span={24}>
                        <Genre />
                    </Col>
                </Row>
                <Row className="homepage_component_fixed_height">
                    <Col span={24}>
                        <MoviesOther name={'Popular'} />
                    </Col>
                </Row>
                <Row className="homepage_component_fixed_height">
                    <Col span={24}>
                        <MoviesOther name={'Most Rated'} />
                    </Col>
                </Row>
                <Row className="homepage_component_fixed_height">
                    <Col span={24}>
                        <MoviesOther name={'Now Playing'} />
                    </Col>
                </Row>
                <Row className="homepage_component_fixed_height">
                    <Col span={24}>
                        <MoviesOther name={'Upcoming'} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage;