import React, { createContext, useState } from 'react'

export let TodoitemsContext = createContext()
const Todo = () => {

    let [Task, setTask] = useState({
        task: "",
        category: ""
    })

    let {task,category} = Task

    let handleChange = (event) =>{
        let {name,value} = event.target 
        setTask({...Task,[name]:value})
    }    

    let handleSubmit = (event) =>{
        event.preventDefault()

    }    
    console.log(Task);

  return (
    <>
        <form className='main-form border-2 p-4 border-black w-96'>
            <div className="form-input p-2">
                <label htmlFor="" className='block pb-2 text-blue-800'>Enter your Task</label>
                <input type="text" className='border-2 border-black w-full' name='task' value={task} onChange={handleChange}/>
            </div>

            <div className="form-input p-2">
                <label htmlFor="" className='block pb-2 text-blue-800'>Select the category</label>
                <select name="category" value={category} onChange={handleChange} id="" className='border-2 border-black w-full'>
                    <option value="">--Select--</option>
                    <option value="general">General</option>
                    <option value="important">Important</option>
                </select>
            </div>

            <div className="form-btm p-2">
                <button className='p-2 bg-slate-200 border-black border-2 text-black font-bold' onClick={handleSubmit}>Add the Task</button>
            </div>
        </form>
    </>
  )
}

export default Todo