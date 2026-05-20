import React, { useState } from "react";

const ApplyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    resume: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application Submitted");
  };

  return (
    <div className="page-wrapper">
      <h1 className="page-title">Apply for Job</h1>

      <form className="form-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Resume Link"
          onChange={(e) =>
            setForm({ ...form, resume: e.target.value })
          }
        />

        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyForm;