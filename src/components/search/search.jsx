import React, { useState } from 'react';
import { Input, Button, Row, Col } from 'antd';
import './search.css'
import { SearchOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'


function SearchResults() {

    const [search, setSearch] = useState('')

    const onSearch = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
            <div className="search_box">
                <Row>
                    <Col span={8} >
                        <Input placeholder="Search for a movie..." onChange={onSearch} />
                    </Col>
                    <Col span={8} >
                        <Link to={`/search?query=${search}`} >
                            <Button className="search_button" type="primary" icon={<SearchOutlined />}>
                                Search
                            </Button>
                        </Link>
                    </Col>
                    <Col span={8} >
                        <h4 className="textColor app_name">Goofy Movies</h4>
                    </Col>
                </Row>
                {/* <Search placeholder="Search for a movie or show" onSearch={onSearch} enterButton="Search" /> */}
            </div>
        </div>
    );
}

export default SearchResults;