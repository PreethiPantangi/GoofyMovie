import axios from 'axios';
import React, { Component } from 'react';
import { getMovieInfoUrl, getImageUrl } from '../../constants/constants'
import './movieinfo.css'
import { Row, Col } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import Overview from '../overview/overview'
import Cast from '../cast/cast'
import Recommendations from '../recommendations/recommendations'

const { TabPane } = Tabs;

class MovieInfo extends Component {
    state = {
        movieData: {},
        credits: {}
    }

    componentDidMount() {
        axios.get(`${getMovieInfoUrl(this.props.match.params.movieId)}`)
            .then((res) => {
                this.setState({ movieData: res.data })
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { movieData } = this.state;

        let year = typeof movieData.release_date === 'string' ? movieData.release_date.split("-")[0] : ""

        let imageUrl = getImageUrl('500')
        imageUrl += movieData.poster_path;

        let runtime = movieData.runtime;
        var hours = Math.floor(runtime / 60);
        var minutes = Math.floor(runtime % 60)

        var formatted = hours + 'hr ' + minutes + 'm ';

        return (
            <div className="movieInfo_component" >
                {/* {movieData.poster_path ? <Image width={'100%'} height={'500px'} imageType={'large'} url={movieData.backdrop_path} /> : null} */}
                <Row>
                    <Col span={12}>
                        {movieData.poster_path ? <img src={imageUrl} width="100%" height="60%" alt={imageUrl} ></img> : null}
                    </Col>
                    <Col span={12}>
                        <div className="movieInfo_details">
                            <Row>
                                <Col span={12}><h3 className="textColor">{movieData.original_title}</h3></Col>
                            </Row>
                            <Row>
                                <h6 className="textColor textStyle">{movieData.tagline}</h6>
                            </Row>
                            <Row>
                                <Col span={8}><p className="textColor">{year}</p></Col>
                                <Col span={8}><p className="textColor">{formatted}</p></Col>
                                <Col span={8}>
                                    <div className="icons-list">
                                        <p className="textColor">{movieData.vote_average}<StarFilled /></p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Tabs defaultActiveKey="1">
                                    <TabPane tab="Overview" key="1" className="textColor">
                                        <Overview movieData={this.state.movieData} />
                                    </TabPane>
                                    <TabPane tab="Cast" key="2">
                                        <Cast movieId={movieData.id} />
                                    </TabPane>
                                    <TabPane tab="More Like This" key="3">
                                        <Recommendations movieId={movieData.id} />
                                    </TabPane>
                                </Tabs>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MovieInfo;