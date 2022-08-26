import Axios from '../services/Axios' 

export const GET_ACTIVITY_LIST = "GET_ACTIVITY_LIST";
export const PATCH_ACTIVITY = "PATCH_ACTIVITY";
export const POST_ACTIVITY = "POST_ACTIVITY"
export const DELETE_ACTIVITY = "DELETE_ACTIVITY"
export const GET_TODO_LIST = "GET_TODO_LIST";
export const PATCH_TODO = "PATCH_TODO";
export const DELETE_TODO = "DELETE_TODO"
export const POST_TODO = "POST_TODO"
const EMAIL_API = "bryanrinaldo"

export const getActivitiesList = () => {
  return (dispatch) => {
    Axios.get('activity-groups?email=' + EMAIL_API)
    .then((res) => {
      const dataActivities = res.data.data;
      dispatch({
        type: GET_ACTIVITY_LIST,
        payload: {
          data: dataActivities
        },
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const updateActivity = (id, data) => {
  return (dispatch) => {
    Axios.patch('activity-groups/' + id,data)
    .then((res) => {
      dispatch({
        type: PATCH_ACTIVITY,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const createActivity = () => {
  return (dispatch) => {
    Axios.post('activity-groups', 
    {
      "title": "New Activity",
      "email": EMAIL_API
    })
    .then((res) => {
      dispatch({
        type: POST_ACTIVITY,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const deleteActivity = (id) => {
  return (dispatch) => {
    Axios.delete('activity-groups/' + id)
    .then((res) => {
      dispatch({
        type: DELETE_ACTIVITY,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const getTodoList = (actID, sortOpt) => {
  return (dispatch) => {
    Axios.get('todo-items?activity_group_id=' + actID)
    .then((res) => {
      const dataTodos = res.data.data;
      switch (sortOpt) {
        case 1:
          dataTodos.sort((a, b) => (a.id < b.id) ? 1 : -1);
          break;
        case 2: 
          dataTodos.sort((a, b) => (a.id > b.id) ? 1 : -1);
          break;
        case 3:
          dataTodos.sort((a, b) => (a.title > b.title) ? 1 : -1);
          break;
        case 4: 
          dataTodos.sort((a, b) => (a.title < b.title) ? 1 : -1);
          break;
        case 5:
          dataTodos.sort((a, b) => (a.is_active < b.is_active) ? 1 : -1);
          break;   
      }
      
      dispatch({
        type: GET_TODO_LIST,
        payload: {
          data: dataTodos
        },
      });
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}

export const updateTodo = (id, data) => {
  return (dispatch) => {
    Axios.patch('todo-items/' + id,data)
    .then((res) => {
      dispatch({
        type: PATCH_TODO,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const deleteTodo = (id) => {
  return (dispatch) => {
    Axios.delete('todo-items/' + id)
    .then((res) => {
      dispatch({
        type: DELETE_TODO,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}
export const createTodo = (data) => {
  return (dispatch) => {
    Axios.post('todo-items/', data)
    .then((res) => {
      dispatch({
        type: POST_TODO,
        payload: {
          data: res
        },
      });
      console.log(res);
    })
    .catch((error) =>{
      console.log(error);
    })
  }
}