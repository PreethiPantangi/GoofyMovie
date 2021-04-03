import axios from 'axios';
import React, { Component } from 'react';
import { getMovieInfoUrl, getImageUrl, getMovieRecommendationsUrl } from '../../constants/constants'
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
        recommendations: {}
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

        let imageUrl = getImageUrl('500')
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
                {/* {movieData.poster_path ? <Image width={'100%'} height={'500px'} imageType={'large'} url={movieData.backdrop_path} /> : null} */}
                <Row>
                    <Col span={12}>
                        <div className="left_image">
                            {movieData.poster_path ? <img src={imageUrl} width="100%" height="100%" alt={imageUrl} ></img> : null}
                        </div>
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
                                <Tabs activeKey={this.state.activeKey} defaultActiveKey={this.state.defaultTabKey}>
                                    <TabPane tab="Overview" key="1" className="textColor">
                                        <Overview movieData={this.state.movieData} />
                                    </TabPane>
                                    <TabPane tab="Cast" key="2">
                                        <Cast movieId={movieData.id} />
                                    </TabPane>
                                    <TabPane tab="More Like This" key="3">
                                        <Recommendations data={this.state.recommendations} movieId={movieData.id} parentCallback={this.handleCallback} />
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