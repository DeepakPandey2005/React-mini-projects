import React, { useContext } from 'react'
import Password, { passContext } from '../../store/Password'

function Input() {
    let {clipBoardObj,password,length,char,number,setLength,setChar,setNumber,copyStr}=useContext(passContext)
  return (
    <>
    <div className='flex justify-center'>
      <input type="text" name="" id="" placeholder='password' className='outline-none rounded-xl w-auto' value={password} readOnly ref={clipBoardObj}/>
      <button className='bg-green-500 rounded-2xl p-1 hover:bg-red-600 text-amber-50' onClick={copyStr}>Copy</button>
    </div>
    <div className='flex justify-center text-[10px] p-3 m-1s'>
        <input type="range" name="" id="" className='mx-2' min={8} max={26} onChange={(e)=>setLength(e.target.value)}/>
        <label htmlFor="" className=' text-red-400'>length:{length}</label>
        <input type="checkbox" name="number" id="" className='mx-2' defaultChecked={number} onChange={()=>setNumber((prev)=> !prev)}/>
        <label htmlFor="Number">Number</label>
        <input type="checkbox" name="char" id="" className='mx-2' defaultChecked={char} onChange={()=>setChar((prev)=> !prev)}/>
        <label htmlFor="char">Special char</label>
    </div>
    </>

  )
}

export default Input
