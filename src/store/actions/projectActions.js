export const createProject = (project) => {
    return (dispatch, getState) => {
        // make async code to database 
        dispatch({
            type: 'CREATE_PROJECT',
            project
        })
    }
}