import React, { useContext } from 'react'
import { todoContext } from '../store/TodoContext'

function Input() {
    const {addTodo}=useContext(todoContext)
    const submitForm=(e)=>{
      e.preventDefault();
      if(!e.target[0].value){
        alert("enter something first...")
        return;
      }
      addTodo(e.target[0].value)
      e.target[0].value=""

    }

  return (
    <form className='m-5 rounded-2xl border-1 border-amber-950 p-2 w-[80%] md:w-[43%] flex justify-between  bg-gray-100' onSubmit={submitForm}>
        <input type="text" name="" id="" placeholder='Enter the Tasks' className='outline-none ' />
        <button className='bg-green-400 rounded-2xl p-1 hover:bg-red-400 font-light text-sm'>Add</button>
      
    </form>
  )
}

export default Input
