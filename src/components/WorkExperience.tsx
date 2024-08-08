import React from 'react';
import '../styles/WorkExperience.css';
import { IJob } from '../interfaces/Job.interface';

const jobs: IJob[] = [
    {
    company: 'RedAVS',
    role: 'Full Stack Developer',
    description: 'Developed a modern and responsive landing page using React to showcase the services of RedAVS. Implemented reusable components and optimized performance to ensure fast load times.',
    },
    {
    company: 'Softtek',
    role: 'Full Stack Developer',
    description: `As a Full Stack Developer from January 2022 to May 2023, I upgraded the Talent Management Tool using React, Angular, .NET, and MSSQL, following the MVC pattern. I managed tasks, provided daily status reports, and tracked defects using Jira. I updated modules for CRUD operations, developed project documentation, and supported a team of six interns. I collaborated with clients on product specifications, fixed bugs, and ensured on-time project delivery within budget. My work included using Bootstrap, RESTful services, HTML, CSS, JSON, and Git for version control.`,
},
{
  company: 'SNG Consultores',
  role: 'Full Stack Developer',
  description: 'Since February 2024, I have been working as a Full Stack Developer at SNG Consultores. My responsibilities include creating an API with Node.js using TypeScript, developing a Backoffice with React and Material UI, and creating tables with MySQL. I have also updated a POS system using Windows Forms and SQL Compact 4.0, resolved ticket issues, and successfully launched and managed system projects from inception to completion.',
}
];

const WorkExperience: React.FC = () => {
    return (
      <div className="work-experience-container">
        <h2>Work Experience</h2>
        <div className="work-experience-grid">
          {jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-details">
                <h3>{job.company}</h3>
                <p><strong>Role:</strong> {job.role}</p>
                <p>{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default WorkExperience;
