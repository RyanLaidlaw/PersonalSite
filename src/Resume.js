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
    'MongoDB',
    'Docker, Azure'
  ];

  return (
    <div>
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
          href="/Ryan_Laidlaw_Resume.pdf"
          download
          className="download-button"
        >
          Download PDF
        </a>
      </div>
      <div className='tables'>
        <div className='skills'>
          <h2>Competencies</h2>
          <table>
            <thead>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr key={index}>
                  <td>{skill}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='tools'>
          <h2>Core Utilities</h2>
          <table>
            <thead>
            </thead>
            <tbody>
              {tools.map((tool, index) => (
                <tr key={index}>
                  <td>{tool}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Resume;
