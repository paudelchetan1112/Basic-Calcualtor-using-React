import React from 'react'
import { useState } from 'react'

const App = () => {
  const[inputValue, setInputValue]=useState("");
  const handleInput=(input)=>{
  setInputValue(prev=>prev+input)
  

  }

  const handleClear=()=>{
    setInputValue("")
  }
  const handleResult=()=>{
    let expression=parseFloat(inputValue)
let result;
try{
  result=eval(expression)
setInputValue(eval)
}
catch(err){
setInputValue("")
}
  }
  return (
    <div className="flex flex-col w-60 h-96 bg-gray-500 m-auto items-center justify-center rounded-xl my-10">
     <div classname="h-36 flex items-center justify-center text-white">
      <input type="text" value={inputValue}   name=""  id="" className=" bg-gray-200 text-right border-2 border-gray-950 w-52 rounded-lg" />
       </div>
       <div>
    <button  className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={()=>handleClear()} value="C">C</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={()=>handleClear()} value="AC">AC</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={()=>handleDelete} value="DEL">DEL</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="/">/</button>
   </div>
   <div>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="7">7</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="8">8</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="9">9</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="*">*</button>
   </div>
      <div>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="4">4</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="5">5</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="6">6</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="-">-</button>
   </div>
      <div>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="1">1</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="2">2</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="3">3</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="+">+</button>
   </div>
      <div>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value="0">0</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center"  onClick={(e)=>handleInput(e.target.value)} value="00">00</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={(e)=>handleInput(e.target.value)} value=".">.</button>
    <button className="hover:bg-gray-800 hover:font-bold cursor-pointer w-10 p-2 m-2 bg-gray-950 rounded-lg text-white text-sm text-center" onClick={()=>handleResult()} >=</button>
   </div>
     
      
    </div>
  )
}

export default App
