import React from 'react';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';
import SingalImage from '../SingalImage/SingalImage';
import ImageOne from '../../images/s1.jpg';
import ImageTwo from '../../images/s2.jpg';

const AllImages = () => {
    return (
        <div className='all-images'>
            <Container>
                <Row>
                    <SingalImage Image={ImageOne} />
                    <SingalImage Image={ImageTwo} />
                    <SingalImage Image={ImageOne} />
                    <SingalImage Image={ImageTwo} />
                    <SingalImage Image={ImageOne} />
                    <SingalImage Image={ImageTwo} />
                </Row>
            </Container>
        </div>
    );
};

export default AllImages;