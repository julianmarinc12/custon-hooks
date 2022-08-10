import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const init =() =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {

    localStorage.setItem('todos',JSON.stringify(todos))
  
  }, [todos])
  

  const handleNewTodo = (todo) => {
    const action ={
      type: '[Todo] Add todo',
      payload: todo
    }
    dispatch(action)
  }

  const handleDeleteTodo =(id)=>{
    dispatch({
      type: '[Todo] Remove todo',
      payload :id
    })
  }

  const handleToggleTodo =(id)=>{
    dispatch({
      type: '[Todo] Toogle todo',
      payload :id
    })
  }

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo
  }
}
