import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobs } from "../services/api";

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    getJobs().then((data) => {
      const found = data.find((j) => j.id === parseInt(id));
      setJob(found);
    });
  }, [id]);

  if (!job) return <p>Loading...</p>;

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Job Details</h1>

      <div className="detail-card">
        <h2>{job.title}</h2>
        <p><strong>Company:</strong> {job.company}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Description:</strong> {job.description}</p>

        <br />

        <button
          className="primary-btn"
          onClick={() => navigate(`/apply/${job.id}`)}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};

export default JobDetails;