import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component{

    render(){
        return (
            <nav id="navBar">
                <div className = 'nav-item'>
                    <a href="#">Projects</a>
                </div>
            </nav>
        )

    }
}

export default Navbar;
