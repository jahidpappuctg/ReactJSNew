import React from 'react';
import './SectionHeading.css'

const SectionHeading = ({ heading, text }) => {
    return (
        <div className='section-heading text-center mb-4'>
            <p>{text}</p>
            <h3> {heading}</h3>
        </div>
    );
};

export default SectionHeading;