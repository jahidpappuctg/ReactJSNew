import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Services.css'
import Service from './../Service/Service';
import S1 from '../../images/s1.jpg';
import SectionHeading from '../SectionHeading/SectionHeading';

const Services = () => {
    return (

        <section className='services-area mb-5'>
          <Container>      
            <SectionHeading heading ="My Services" text="sub heaing"/>
                <Row> 
           
                    <Service
                        image={S1 }
                        heading="This is heading"
                        price="$350"
                        text="School"
                    />
                    <Service
                     image={S1 }
                     heading="This is heading"
                     price="$350"
                     text="School"
                    />
                      <Service
                     image={S1 }
                     heading="This is heading"
                     price="$350"
                     text="School"
                    />
                </Row>
            </Container>    
        </section>
    );
};

export default Services;