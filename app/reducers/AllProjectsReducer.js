//action types
export const GET_ALL_PROJECTS = "GET_ALL_PROJECTS";


const AllProjectsDummyData = [
    { id: 1, name: 'Senior Enrichment Project'}, 
    { id: 2, name: 'Grace Shopper'}
]
//action creators
export const getAllProjects = projects => ({
    type: GET_ALL_PROJECTS, 
    projects: AllProjectsDummyData
})





//reducer
const AllProjectsReducer = (state = [], action) => {
    switch(action.type){
        case GET_ALL_PROJECTS:
            return action.projects;
        default:
            return state;
    }
}

export default AllProjectsReducer;