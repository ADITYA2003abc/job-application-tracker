import "./App.css";
import { useState } from "react";

function App() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");

  const [applications, setApplications] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newApplication = {
      id: Date.now(),
      company,
      role,
      status,
    };

    setApplications([...applications, newApplication]);

    setCompany("");
    setRole("");
    setStatus("Applied");
  };
    const handleDelete = (id) => {
    setApplications(
      applications.filter((application) => application.id !== id)
    );
  };
   const total = applications.length;
const applied = applications.filter((app) => app.status === "Applied").length;
const interview = applications.filter((app) => app.status === "Interview").length;
const selected = applications.filter((app) => app.status === "Selected").length;
const rejected = applications.filter((app) => app.status === "Rejected").length;
  return (
   
  <div className="container">
    <h1>Job Application Tracker</h1>

    <p className="subtitle">
      Track your job applications in one place.
    </p>

    <div className="dashboard">
      <div className="card">
        <h3>Total</h3>
        <p>{total}</p>
      </div>

      <div className="card">
        <h3>Applied</h3>
        <p>{applied}</p>
      </div>

      <div className="card">
        <h3>Interview</h3>
        <p>{interview}</p>
      </div>

      <div className="card">
        <h3>Selected</h3>
        <p>{selected}</p>
      </div>

      <div className="card">
        <h3>Rejected</h3>
        <p>{rejected}</p>
      </div>
    </div>

    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <input
        type="text"
        placeholder="Job Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Selected">Selected</option>
        <option value="Rejected">Rejected</option>
      </select>

      <button type="submit">Add Application</button>
    </form>

    <h2>Applications</h2>

    {applications.map((application) => (
      <div className="application" key={application.id}>
        <h3>{application.company}</h3>
        <p>Role: {application.role}</p>
        <p>Status: {application.status}</p>

        <button
          className="delete-btn"
          onClick={() => handleDelete(application.id)}
        >
          Delete
        </button>
      </div>
    ))}
  </div>
);
}

export default App;