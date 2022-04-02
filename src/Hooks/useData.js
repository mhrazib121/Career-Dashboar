import React, { useEffect, useState } from 'react';

const useData = () => {
    const [jobData, setJobData] = useState([]);
    useEffect(()=>{
        fetch('https://afternoon-journey-90579.herokuapp.com/jobposts')
        .then(res=> res.json())
        .then(data=> setJobData(data))
    },[])
    return [
        jobData
    ];
};

export default useData;