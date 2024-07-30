import React from 'react';
import { Helmet } from 'react-helmet'
import './css/Projects.css'

function Projects() {

  const schoolProjects = [
    {projectName: "Calendar Application", class_name: "CS518 - Introduction to Software Engineering", projectDescription: "Worked in a group setting to develop a calendar web application. Using Python and the Flask framework with MongoDB in the backend, we were able to create a user signup and login page, as well as establish user sessions. While this app is minimalistic in design, it was great practice for creating dynamic web pages using HTTP request methods."},
    {projectName: "Virtual Memory Simulation", class_name: "CS520 - Computer Organization and System-Level Programming", projectDescription: "Over the course of two weeks, wrote a program to simulate virtual memory to handle addressing read and write operations. Started by implementing the groundwork for structures such as virtual memory, physical memory, a page table and a Translation Lookaside Buffer (TLB). Along with this, implemented replacement algorithms for page faults and TLB misses such as Round Robin Replacement and Least Recently Used."},
    {projectName: "More to come..."}
  ]

  const personalProjects = [
    {projectName: "Tic-Tac-Toe", projectDescription: "This project, built in Python using the Pygame library, is a small project with the sole purpose of learning about Pygame. To play, head to my GitHub page linked below, clone the repository and run the tictactoe.py script.", link: "https://github.com/RyanLaidlaw/TicTacToe"},
    {projectName: "Personal Website", projectDescription: "This very website is another project of mine. Having very limited JavaScript knowledge, I decided that this would be a good introduction to the language. This website is built with JavaScript, HTML and CSS that runs on Node.js. The source code for this project is available at my GitHub page, linked below.", link: "https://github.com/RyanLaidlaw/PersonalSite"},
    {projectName: "More to come..."}
  ]

  return (
    <div>
        <Helmet>
            <title>Projects - Ryan Laidlaw</title>
        </Helmet>
        <div>
            <h1>Notable School Projects</h1>
        </div>
        <div className='school-projects'>
        {schoolProjects.map((project, index) => (
            <div
            key={index}
            className={`school-item ${index % 2 === 0 ? 'even-row' : 'odd-row'} ${project.projectName === "More to come..." ? 'more-to-come' : ''}`}
            >
            <h3 className={`project-name ${project.projectName === "More to come..." ? 'more-to-come-font' : ''}`}>
              {project.projectName}
            </h3>
              <p className='class_name'>{project.class_name}</p>
              <p className='project-description'>{project.projectDescription}</p>
            </div>
        ))}
        </div>
        <div>
          <h1 className='personal-projects-title'>Personal Projects</h1>
        </div>
        <div className='personal-projects'>
        {personalProjects.map((project, index) => (
          <div
          key={index}
          className={`personal-item ${index % 2 === 0 ? 'even-row' : 'odd-row'} ${project.projectName === "More to come..." ? 'more-to-come' : ''}`}
          >
          <h3 className={`personal-project-name ${project.projectName === "More to come..." ? 'more-to-come-font' : ''}`}>
            {project.projectName}
          </h3>
          <p className='personal-project-description'>{project.projectDescription}</p>
          {project.link && (
            <p className='personal-project-link'>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a>
            </p>
          )}
         </div>
        ))}
        </div>
    </div>
  );
}

export default Projects;
