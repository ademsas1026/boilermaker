import { connect } from 'react-redux';

import store from '../store.js'
import AllProjects from './AllProjects.jsx';
import { getAllProjects } from '../reducers/AllProjectsReducer';

const mapStateToProps = function(state, ownProps){
    return {
        projects: state.projects
    }
};

const mapDispatchToProps = function(dispatch, ownProps){
    return {
        getAllProjects: function(){
            const action = getAllProjects();
            dispatch(action);
        }
    }
}

const AllProjectsContainer = connect(mapStateToProps, mapDispatchToProps)(AllProjects);
export default AllProjectsContainer;