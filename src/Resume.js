import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Resume.css';

function Resume() {
  const skills = [
    'Python, Java, C',
    'HTML/CSS',
    'JavaScript',
    'Version Control',
    'Backend Development',
    'DevOps'
  ];

  const tools = [
    'VS Code',
    'Bootstrap',
    'React, Node.js',
    'Git, Bitbucket, Jira',
    'MongoDB, Flask',
    'Docker, Azure'
  ];

  const workExperience = [
    { jobTitle: 'NVMe Technician', company: 'UNH InterOperability Laboratory', period: 'January 2024 - Present', 
    description: 'Working with other interns in the NVMe consortium to provide testing and solutions for tech companies. Developing tests, fixing bugs and providing online customer support.' },

    { jobTitle: 'Crew Member', company: 'R&R Landscaping', period: 'June 2023 - June 2024', 
    description: 'Performed upkeep of existing landscaping by pruning, trimming, weeding, and mulching as the leader of a 2-3 man crew.' },

    { jobTitle: 'Courtesy Clerk', company: 'Shaws Supermarkets', period: 'November 2019 - June 2023',  
    description: "Customer service representative that worked directly with store patrons. Handled price corrections, returns, and customer check out."}
  ];

  return (
    <div>
        <style>
            {/*Fonts for title use*/}
            @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600..900;1,400..900&display=swap');
        </style>
      <Helmet>
        <title>Résumé - Ryan Laidlaw</title>
      </Helmet>
      <div className="contact">
        <div className="contact-info">
          <h1>Ryan Laidlaw</h1>
          <h2>rdlaidlaw@comcast.net</h2>
          <h3>508-448-2882</h3>
        </div>
        <a
          href={`${process.env.PUBLIC_URL}/Ryan_Laidlaw_Resume.pdf`}
          download
          className="download-button">
          Download PDF
        </a>
      </div>
      <div className='tables'>
        <div className='skills'>
          <h2>Competencies</h2>
          <table>
            <thead></thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                  <td>{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='tools'>
          <h2>Core Utilities</h2>
          <table>
                <thead></thead>
                <tbody>
                {tools.map((tool, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even-row' : 'odd-row'}>
                    <td>{tool}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
      </div>
      <h2 className='work-title'>Work Experience</h2>
      <div className='work-exp'>
        {workExperience.map((work, index) => (
          <div key={index} className={`work-item ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
            <h3 className='company-name'>{ work.company }</h3>
            <h3 className='job-title'>{ work.jobTitle }</h3>
            <h3 className='period'>{ work.period }</h3>
            <p className='job-description'>{ work.description }</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resume;
