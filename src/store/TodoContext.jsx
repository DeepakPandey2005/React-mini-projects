import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
export const todoContext=createContext({})



function TodoContext({children}) {
const [todos,setTodos]=useState([])

useEffect(()=>{
  const todos=JSON.parse(localStorage.getItem('todos'))
  if(todos && todos.length>0){
    setTodos(todos)
  }
},[])

useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todos))
},[todos])

const addTodo=(newTodo)=>{
  setTodos((prev)=>[...prev , { data:newTodo,id:Date.now(),completed:false}])
}
const deleteTodo=(id)=>{
  setTodos(todos.filter((todo)=>todo.id!=id))}

const updateTodo=(id,todo)=>{
  setTodos((prev)=>prev.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))

}
const toggleTodo=(id)=>{
setTodos((prev)=>prev.map((todo)=>todo.id===id? {...todo,completed:!todo.completed}:todo))}
  return (
   <todoContext.Provider value={{todos,addTodo,deleteTodo,toggleTodo,updateTodo}}>
{children}
   </todoContext.Provider>
  )
}



export default TodoContext
