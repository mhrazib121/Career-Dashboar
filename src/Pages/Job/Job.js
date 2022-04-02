import React from 'react';
import './Job.css'

const Job = () => {
    return (
        <div className='container my-5'>
            <h2>Business Systems </h2>
            <div className='p-4 my-4 d-flex justify-between gap-2 job-description'>
                <div className='p-2 col-lg-11'>
                    <h4 className='fw-bold'>Business Systems Analyst - Financial Systems  (Tittle)</h4>
                    <p>Systems team to help expand and maintain our Order to Cash applications and its ecosystem. Your role will be help implement administer and optimaize our business systems and assist with business process <span className='fw-bold'>( Short Description )</span></p>
                    <h5>Remote / Hybrid</h5>
                </div>
                <div className='p-3 col-lg-1'>
                    <p>$ Paid</p>
                    <p>Gratis</p>
                </div>
            </div>
        </div>
    );
};

export default Job;