import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../nav-bar/nav-bar';

const Home = (props) => {
    useEffect(() => {
        document.title = "Soham Satpute Software Developer Portfolio";
    }, []);

    return (
        <div className="home-page">
            <NavBar page="home" />
            <div className="home-top-container">
                <div className="home-top-left">
                    <img
                        src={require('../../images/Screenshot 2024-09-22 164828.png')} 
                        alt="Soham Satpute"
                        className="profile-image"
                    />
                </div>
                <div className="home-top-right">
                    <h2>Soham Satpute</h2>
                    <ul>
                        <li>
                            <div className="icon is-small"><i className="fa fa-user"></i></div>
                            <span>Full Stack Developer</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-map-marker-alt"></i></div>
                            <span>THANE</span>
                        </li>
                        <li>
                            <div className="icon is-small"><i className="fa fa-graduation-cap"></i></div>
                            <span>Engineering Student, VESIT</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="home-bottom">
                <div className="home-bottom-text">
                    <p>I'm Soham. Trying to become the best web developer I can be. Currently Learning Web Development.</p>
                    <br />
                    <p>When I'm not programming, you will find me exploring or engaging in other activities. If you are interested in getting in touch with me, feel free to <Link to="/contact">drop me a line</Link>.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
