'use client'
import { type } from 'os';
import React, { useState } from 'react'

const Home = () => {
    // define state
    const [todos,setTodos]=useState([
        {movie:"Django Unchained",id:1},
        {movie:"catch me If you can!" ,id:2}
    ]);
    const[inputval,setInput]=useState("")

    const[id,setId]=useState(0)

    // function item

    let Item=()=>{
        
        
        let obj=todos.find((item)=>item.id===id);
        if(obj){
            let newArray=todos.filter((item)=> item.id !==obj.id)
            setTodos([...newArray,{movie:inputval,id:id}])
            setInput("");
            setId(0)
            return
        }
        
        setTodos([...todos,{movie:inputval,id:id}])
        setInput("");
        setId(0)
    }

    // Eidt function 

    const eidtItem=(id:any)=>{
        let obj:any=todos.find((item)=>item.id===id)
        setInput(obj.movie);
        setId(obj.id)
    }
    const delItem=(id:any)=>{
        let newArray=todos.filter((item)=>item.id!==id);
        setTodos([...newArray]);
        
    }
  return (
    <div className='max-w-4xl p-5 mx-auto '>
        <h1 className='text-center text-[40px] underline'>Todo App</h1>
        {/* start input div */}
        <div className='flex justify-between mt-6 gap-4  '>
            <input onChange={(e)=>setInput(e.target.value)} value={inputval} className='p-2 ml-4 text-lg border-b focus:outline-none  w-[60%]' type="text" placeholder='Add movie' />
            <input type='number' value={id} onChange={(e:any)=>setId(e.target.value)} className= 'p-2 ml-4 text-lg border-b focus:outline-none  w-[20%]' placeholder='Enter Id' />
            <button onClick={Item} className='bg-blue-600 w-[20%] text-whilte rounded p-2 hover:bg-blue-300'>Add Movie</button>
        </div>
        {/* end input div */}
        <h1 className='text-center text-[40px] underline mt-5'>Movie list</h1>
    

        <div className='grid grid-cols-2 gap-5 mt-6'>
                        {
        todos.map((item:any,index:any)=>{
            return(
                
            <div className='shadow mt-5 ' key={index}>
            <div className='flex justify-between text-lg'>
                <span className=' rounded-full w-8 h-8 shadow text-center py-auto' >{index+1}</span>
                <span onClick={()=>delItem(item.id)} className='rounded-full w-8 h-8 shadow text-center cursor-pointer text-red-700 py-auto'>X</span>
            </div>
            {/* data div */}
            <div className='mt-5 text-[30px] text-gray-700'> {item.movie} </div>
            <div><h2 onClick={()=>eidtItem(item.id)} className='text-right cursor-pointer text-red-700'>Edit</h2></div>
            </div>
            )
        })
    }
    
            
        </div>

    </div>
  )
}

export default Home
