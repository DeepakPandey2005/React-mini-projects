import React, { useContext, useState } from "react";
import { todoContext } from "../store/TodoContext";
import { BiPencil, BiSave } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

function Todo({ todo }) {
  const [edit, setEdit] = useState(false);
  const [msg, setMsg] = useState(todo.data);
  const { deleteTodo, toggleTodo,updateTodo } = useContext(todoContext);
  const editText = () => {
      updateTodo(todo.id,{...todo,data:msg})
      setEdit(false)
    };

  return (
    <div
      className={`flex flex-row shadow-lg rounded-2xl p-1 m-1 justify-between ${
        todo.completed
          ? " bg-green-300 text-red-500"
          : " bg-white/60 backdrop-blur-md"
      }`}
    >
      <input
        type="checkbox"
        className="m-4"
        onChange={() => {
          toggleTodo(todo.id);
        }}
        defaultChecked={todo.completed}
      />
          <input
        type="text"
        name=""
        id=""
        className={`outline-none text-left w-auto ${
          todo.completed && "animate-pulse line-through"
        }`}
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value)
        }}
        readOnly={!edit}
      />
      <div>
        <button className={`m-2 p-1 rounded-2xl border-1 ${todo.completed ? "bg-gray-400 text-gray-100": " bg-black text-white"}`}
                onClick={
            ()=>{
                if (todo.completed) return;
                if(edit){
                    editText();
                }else setEdit((prev)=> !prev);
            }
        }
        disabled={todo.completed}
        >
          {edit ?<BiSave/>:<BiPencil/>}
        </button>
        <button
          className="m-2 bg-black text-white p-1 rounded-2xl border-1"
          onClick={() => {
            deleteTodo(todo.id);
          }}
        >
          <MdDelete />
        </button>
      </div>
    </div>
  );
}

export default Todo;
