import axios from 'axios';
import React, { Component } from 'react';
import { getMovieInfoUrl, getImageUrl, getCreditsUrl, getMovieRecommendationsUrl } from '../../constants/constants'
import './movieinfo.css'
import { Row, Col } from 'antd';
import { StarFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import Overview from '../overview/overview'
import Cast from '../cast/cast'
import Recommendations from '../recommendations/recommendations'
import { Link } from 'react-router-dom'

const { TabPane } = Tabs;

class MovieInfo extends Component {
    state = {
        movieData: {},
        movieId: '',
        isGotRecommendation: false,
        recommendationID: 0,
        defaultTabKey: 1,
        recommendations: {},
        credits: {}
    }


    componentDidMount() {
        this.getMovies();
        this.setState({ movieId: this.props.match.params.movieId })
    }

    componentDidUpdate() {
        if (this.state.isGotRecommendation && this.state.recommendationID !== this.state.movieId) {
            this.getMovies();
            this.setState({ isGotRecommendation: false });
            this.setState({ defaultTabKey: 1 })
        }
    }


    getMovies = () => {
        axios.get(`${getMovieInfoUrl(this.props.match.params.movieId)}`)
            .then((res) => {
                this.setState({ movieData: res.data })
                axios.get(getMovieRecommendationsUrl(this.props.match.params.movieId))
                    .then((res) => {
                        this.setState({ recommendations: res.data })
                    })
                axios.get(`${getCreditsUrl(this.props.match.params.movieId)}`)
                    .then((res) => {
                        this.setState({ credits: res.data })
                    })
            })
            .catch((err) => {
                console.log(err);
            });
    }


    handleCallback = (childData) => {
        this.setState({ isGotRecommendation: true })
        this.setState({ recommendationID: childData })
        // if (childData !== this.state.movieId) {
        //     this.setState({ movieId: childData })
        // }
    }

    render() {
        const { movieData } = this.state;

        let year = typeof movieData.release_date === 'string' ? movieData.release_date.split("-")[0] : ""

        let imageUrl = getImageUrl('1280')
        imageUrl += movieData.poster_path;

        let runtime = movieData.runtime;
        var hours = Math.floor(runtime / 60);
        var minutes = Math.floor(runtime % 60)

        var formatted = hours + 'hr ' + minutes + 'm ';

        if (this.state.isChangeDetected) {
            return (
                <Link to={`/movie/${this.props.match.params.movieId}`} />
            )
        }

        return (
            <div className="movieInfo_component" >
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col className="gutter-row" span={12}>
                        <div className="movieInfo_poster">
                            <img className="poster" src={imageUrl} alt={imageUrl} ></img>
                        </div>
                    </Col>
                    <Col className="gutter-row" span={12}>
                        <div className="movieInfo_content">
                            <Row>
                                <Col span={24}><h3 className="textColor">{movieData.original_title}</h3></Col>
                            </Row>
                            <Row>
                                <Col span={24} >
                                    <h6 className="textColor textStyle">{movieData.tagline}</h6>
                                </Col>
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
                                <Col span={24} >
                                    <Tabs activeKey={this.state.activeKey} defaultActiveKey={this.state.defaultTabKey}>
                                        <TabPane tab="Overview" key="1" className="textColor">
                                            <Overview movieData={this.state.movieData} />
                                        </TabPane>
                                        <TabPane tab="Cast" key="2" className="textColor">
                                            <Cast data={this.state.credits} movieId={movieData.id} />
                                        </TabPane>
                                        <TabPane tab="More Like This" key="3" className="textColor">
                                            <Recommendations data={this.state.recommendations} movieId={movieData.id} parentCallback={this.handleCallback} />
                                        </TabPane>
                                    </Tabs>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default MovieInfo;