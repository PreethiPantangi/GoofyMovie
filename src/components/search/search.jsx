import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import './search.css'
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import logo from '../../logo2.png'

function SearchResults() {

    const [search, setSearch] = useState('')

    const onSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="search_component">
                <Row>
                    <Col span={8} className="box">
                        <Input placeholder="Search for a movie..." onChange={onSearch} />
                    </Col>
                    <Col span={8} className="box">
                        <Link to={`/search?query=${search}`} >
                            <Button className="search_button" type="primary" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </Link>
                    </Col>
                    <Col span={8} >
                        <img className="logo box" src={logo} alt="Goofy Movies" />
                        {/* <h4 className="textColor app_name">Goofy Movies</h4> */}
                    </Col>
                </Row>
                {/* <Search placeholder="Search for a movie or show" onSearch={onSearch} enterButton="Search" /> */}
            </div>
        </div>
    );
}

export default SearchResults;