import React from 'react';
import AllImages from '../AllImages/AllImages';
import SectionHeading from '../SectionHeading/SectionHeading';
import './Momoments.css'

const Momoments = () => {
    return (
        <section className='moments-area'>
            <SectionHeading heading="Some Moments" />
            <AllImages />
        </section>
    );
};

export default Momoments;