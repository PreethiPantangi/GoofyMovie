import React, { Component } from 'react';
import { Input } from 'antd';
import './search.css'

const { Search } = Input;

const onSearch = value => {
    console.log(value);
};


class SearchComponent extends Component {
    state = {}
    render() {
        return (
            <div>
                <div className="search_box">
                    <Search placeholder="Search for a movie or show" onSearch={onSearch} enterButton="Search" />
                </div>
            </div>
        );
    }
}

export default SearchComponent;