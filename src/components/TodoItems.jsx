import React, { useState } from 'react'
import { BiPencil, BiSave } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { todoContext } from '../store/TodoContext';
import Todo from './Todo';


function TodoItems() {
    const {todos}=useContext(todoContext)
  return (
    <div className='flex flex-col-reverse rounded-2xl p-2'>
            {
                todos && todos.map((todo,i)=><Todo todo={todo} key={i}/>)}
      </div>
  )
}

export default TodoItems
