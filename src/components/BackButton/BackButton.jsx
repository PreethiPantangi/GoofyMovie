import React from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';
import './BackButton.css'
import { useHistory } from "react-router-dom";
import { Row, Col } from 'antd'

function BackButton() {

    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    const goForward = () => {
        history.goForward()
    }

    return (
        <React.Fragment>
            <Row>
                <Col span={12} >
                    <div className="button_goback">
                        <ArrowLeftOutlined className="arrow" onClick={goBack}><p className="textColor" >Go Back</p></ArrowLeftOutlined>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="button_goforward">
                        <ArrowRightOutlined className="arrow" style={{ color: 'white' }} onClick={goForward} />
                    </div>
                </Col>
            </Row>
        </React.Fragment>
    );
}

export default BackButton;