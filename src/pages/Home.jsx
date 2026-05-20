import React, { useEffect, useState } from "react";
import { getJobs } from "../services/api";
import JobCard from "../components/JobCard";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getJobs().then((data) => setJobs(data));
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-container">

      {/* Hero Section */}
      <div className="hero-section">

        {/* Left Image */}
        <div className="hero-image">
          
        </div>

        {/* Center Content */}
        <div className="hero-content">
          <h1>
            Find Your Dream <span>Job</span>
          </h1>

          <p>
            Explore top opportunities from leading companies and build your career.
          </p>

          <div className="search-bar">
            <input
              type="text"
              placeholder="Search jobs by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button>Search</button>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn">Browse Jobs</button>
            <button className="secondary-btn">Upload Resume</button>
          </div>
        </div>

        {/* Stats */}
        {/* <div className="hero-stats">
          <div>
            <h2>12K+</h2>
            <p>Job Openings</p>
          </div>

          <div>
            <h2>750+</h2>
            <p>Companies</p>
          </div>

          <div>
            <h2>25K+</h2>
            <p>Applicants</p>
          </div>
        </div> */}
      </div>

      {/* Jobs Section */}
      <div className="jobs-section">
        <div className="jobs-header">
          <h2>Featured Jobs</h2>
          <button>View All Jobs</button>
        </div>

        <div className="jobs-list">
          {filteredJobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onView={(id) => navigate(`/job/${id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;