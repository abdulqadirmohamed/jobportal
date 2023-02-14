import React, { useState } from "react";
import JobsCards from "./JobsCards";

const Jobs = () => {
  const [jobs, setJobs] = useState([
    { 
        id: 1, 
        img: 'https://i.pcmag.com/imagery/articles/04e4rbdlYClonRk2T3FiJXN-1..v1569492116.jpg', 
        title: "Front End Developer", 
        location:'London, UK',
        posted: '5 mins ago' 
    },
    { 
        id: 2, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU', 
        title: "Email Designer", 
        location:'Marina East, Singapore',
        posted: '15 mins ago'  
    },
    { 
        id: 3, 
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4jyIZKnCnSctH43DTboAeajoTwEeJPFbk_A&usqp=CAU', 
        title: "Full Stack Developer", 
        location:'Singapore',
        posted: '45 mins ago'  
    },
]);
  return (
    <div className="">
        {jobs.map((job)=>(
            <JobsCards key={job.id} title={job.title} image={job.img} location={job.location} posted={job.posted}/>
        ))}
    </div>
  );
};

export default Jobs;
