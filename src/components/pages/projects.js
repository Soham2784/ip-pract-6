import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar';

const Projects = (props) => {
    useEffect(() => {
        document.title = "Projects - Soham Satpute Portfolio";
    }, []);

    return (
        <div className="projects-page">
            <NavBar page="projects" />
            <div className="projects-container">
                <h2>Projects</h2>

                {/* Project 1 - JS, Node JS, CSS, HTML */}
                <div className="project">
                    <div className="project-text">
                        <h3>Project 1 - Full Stack App</h3>
                        <div className="project-tags">
                            <div className="tag tag-html">HTML5</div>
                            <div className="tag tag-css">CSS</div>
                            <div className="tag tag-js">JS</div>
                            <div className="tag tag-nodejs">Node JS</div>
                        </div>
                        <p>This project was developed using HTML, CSS, JS, and Node.js for both front-end and back-end development.</p>
                    </div>
                    <div className="project-links">
                        <Link to="/contact" className="project-button">
                            <span className="fa fa-envelope"></span> Contact For Details
                        </Link>
                    </div>
                </div>

                {/* Project 2 - HTML, CSS */}
                <div className="project">
                    <div className="project-text">
                        <h3>Project 2 - Responsive Website</h3>
                        <div className="project-tags">
                            <div className="tag tag-html">HTML5</div>
                            <div className="tag tag-css">CSS</div>
                        </div>
                        <p>This is a responsive website project built using only HTML and CSS.</p>
                    </div>
                    <div className="project-links">
                        <Link to="/contact" className="project-button">
                            <span className="fa fa-envelope"></span> Contact For Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
