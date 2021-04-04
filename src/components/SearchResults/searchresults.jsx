import React, { Component } from 'react';
import BackButton from '../BackButton/BackButton'
import './searchresults.css'
import { getMoviesByQuery } from '../../constants/constants'
import axios from 'axios';
import Image from '../image/image'
import Loader from '../loader/loader'
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom'

class SearchResults extends Component {

    state = {
        queryValue: '',
        queryData: {}
    }

    componentDidMount() {
        let query = this.props.location.search.split('=');
        let queryValue = query[query.length - 1];
        this.setState({ queryValue })
        axios.get(getMoviesByQuery(queryValue))
            .then((res) => {
                console.log(res.data);
                this.setState({ queryData: res.data })
            })
            .catch((err) => {
                console.log(err);
            })
    }

    render() {
        const { queryData, queryValue } = this.state;
        if (queryData.results) {
            return (
                <div className="searchresults_component">
                    <BackButton />
                    <Row>
                        <Col span={24} >
                            <h3 className="textColor">Search results for "{queryValue}"</h3>
                        </Col>
                    </Row>
                    <div className="movies_list" >
                        {queryData.results.map((data) => (
                            <Link key={data.id} to={`/movie/${data.id}`}>
                                <div className="movie_info" key={data.id} >
                                    <div className="movieCard" >
                                        <div className="movie_image">
                                            <Image height={'300px'} width={'100%'} imageType={'small'} url={data.poster_path} />
                                        </div>
                                        <p className="movie_title" >{data.original_title}</p>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            );
        } else {
            return (
                <Loader />
            )
        }
    }
}

export default SearchResults