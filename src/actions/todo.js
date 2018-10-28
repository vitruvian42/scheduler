export function createTodo(todo){
  return function(dispatch){
        dispatch({
            payload: todo,
            type: "CREATE_NEW_TODO"
        })
  }
}