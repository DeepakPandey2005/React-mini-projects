import { createContext, useEffect, useRef, useState } from "react";

export let passContext=createContext()


function Password(props) {
    const [password ,setPassword]=useState("")
    const [char,setChar]=useState(false)
    const [number,setNumber]=useState(false)
    const [length,setLength]=useState(8)
    const clipBoardObj=useRef();

useEffect(()=>{
  generate()
},[length,number,char])
    function generate(){
        let pass=""

       let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if(number) str+="0123456789";
        if(char) str+="!@#$%^&*()";
        
        for (let i=1;i<=length;i++){
          let p=Math.floor(Math.random()*str.length+1)
          pass+=str.charAt(p)
        }
        setPassword(pass)
 }
 let copyStr=()=>{
   clipBoardObj.current?.select()
   window.navigator.clipboard.writeText(password)
   console.log("clicked")
 }

  return (
    <passContext.Provider value={{generate,password,length,char,number,setLength,setChar,setNumber,clipBoardObj,copyStr}}>
        {props.children}
    </passContext.Provider>
  )
}
export default Password
