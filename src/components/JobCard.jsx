import React from "react";

const JobCard = ({ job, onView }) => {
  return (
    <div className="job-card">
      <div className="job-left">
        <div className="company-logo">
          {job.company[0]}
        </div>

        <div>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <small>{job.location}</small>
        </div>
      </div>

      <div className="job-right">
        <button onClick={() => onView(job.id)}>
          View Details →
        </button>
      </div>
    </div>
  );
};

export default JobCard;