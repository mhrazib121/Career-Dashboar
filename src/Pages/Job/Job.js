import React from 'react';
import useData from '../../Hooks/useData';
import './Job.css'

const Job = () => {
    const [jobData] = useData();
    console.log(jobData);
    // jobData.map(data=>setData)
    return (
        <div className='container my-5'>
            {
                jobData.map((data, id) =>
                    <div key={id}>
                        <h2>{data.jobSection} </h2>
                        <div className='p-4 my-4 d-flex justify-between gap-2 job-description'>
                            <div className='p-2 col-lg-11'>
                                <h4 className='fw-bold'>{data.tittle}  (Tittle)</h4>
                                <p>{data.description}<span className='fw-bold'>( Short Description )</span></p>
                                <h5>{data.workplaceType}</h5>
                            </div>
                            <div className='p-3 col-lg-1'>
                                <p>$ Paid</p>
                                <p>Gratis</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Job;