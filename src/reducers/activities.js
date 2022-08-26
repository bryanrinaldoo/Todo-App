import {DELETE_ACTIVITY, DELETE_TODO, GET_ACTIVITY_LIST, GET_TODO_LIST, PATCH_ACTIVITY, PATCH_TODO, POST_ACTIVITY, POST_TODO} from '../actions/activityAction'

let initialState ={
  getActivitiesList: false,
  getResUpdateActivity: false,
  getResCreateActivity: false,
  getResDeleteActivity: false,
  getTodoList: false,
  getResUpdateTodo: false,
  getResDeleteTodo: false,
  getResCreateTodo: false

}

const activities = (state = initialState, action) =>{
  switch (action.type) {
    case GET_ACTIVITY_LIST:
      return {
        ...state,
        getActivitiesList: action.payload.data
      };
    case PATCH_ACTIVITY:
      return {
        ...state,
        getResUpdateActivity: action.payload.data
      };
    case POST_ACTIVITY :
      return {
        ...state,
        getResCreateActivity: action.payload.data
      };
    case DELETE_ACTIVITY :
      return {
        ...state,
        getResDeleteActivity: action.payload.data
      };
    case GET_TODO_LIST:
      return {
        ...state,
        getTodoList: action.payload.data
      };
    case PATCH_TODO:
      return {
        ...state,
        getResUpdateTodo: action.payload.data
      };
    case DELETE_TODO :
      return {
        ...state,
        getResDeleteTodo: action.payload.data
      };
    case POST_TODO :
      return {
        ...state,
        getResCreateTodo: action.payload.data
      };
  
    default:
      return state
  }
}

export default activities