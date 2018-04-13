import React, { Component } from 'react';
import store from '../store.js'

class AllProjects extends Component {
    constructor(props){
        super();
        this.state = store.getState();
    }

    componentDidMount(){
        this.props.getAllProjects();
    }

    render(){
        const { projects } = this.props;
        return (
            <div id='projectsPage'>
                {
                    projects.length > 0 
                    ? projects.map(project => (
                        <div key={project.id}>
                            <a href="#">{project.name}</a>
                        </div>
                    ))
                    : null
                }
            </div>
        )
    }


}
export default AllProjects;