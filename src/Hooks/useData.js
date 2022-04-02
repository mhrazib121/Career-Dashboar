import React, { useEffect, useState } from 'react';

const useData = () => {
    const [jobData, setJobData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/jobposts')
        .then(res=> res.json())
        .then(data=> setJobData(data))
    },[])
    return [
        jobData
    ];
};

export default useData;