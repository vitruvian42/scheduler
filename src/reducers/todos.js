export default function reducer(state={
    todos: []
  }, action) {
    switch (action.type) {
      case "CREATE_NEW_TODO": {
        let newObj = []
        newObj.push(action.payload)
        state.todos.map((todo)=>{
          newObj.push(todo)
        })
        return {
          todos : newObj
        }
      }     
    }
    return state
}