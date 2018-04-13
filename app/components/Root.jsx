import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar.jsx';
import AllProjectsContainer from './AllProjectsContainer.jsx';

class Root extends Component {
    render(){
        return (
            <div>
                <div><Navbar /></div>
                <h1>Abigail Demsas</h1>
                <h2>Fullstack Developer</h2>
                <img src="https://media.licdn.com/dms/image/C4E03AQFBBnE87k-loQ/profile-displayphoto-shrink_200_200/0?e=1528765200&v=beta&t=qeyOp7930I4tDtDJvJcVf-wIn-gf5Q7UFfb-V1-WRy0" />
                <AllProjectsContainer />
            </div>
        )
    }
}   

export default Root;