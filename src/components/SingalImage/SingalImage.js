import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import './SingalImage.css'

const SingalImage = ({ Image }) => {
    return (
        <Col lg={3}>
            <div className="singal-area">
                <img src={Image} alt="" />
            </div>
        </Col>
    );
};

export default SingalImage;