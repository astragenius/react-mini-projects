import React, { useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/outline'

const EditForm = ({editedTask, handleUpdateTask}) => {
    const [updateTask, setUpdateTask] = useState(editedTask.name)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        handleUpdateTask({...editedTask, name: updateTask})
       
      
    }
  return (
    <div 
    role="dialog" 
    aria-labelledby='editTask'
    //onClick={}
    >
        <form
         className='todo'
         onSubmit={handleSubmit}
         >
         <div className="wrapper">
            <input
                type="text"
                id='editTask'
                className='input'
                value={updateTask}
                onInput={(e) => setUpdateTask(e.target.value)}
                required
                autoFocus
                maxLength={60}
                placeholder='Update Task'
            />
            <label
             htmlFor="editTask"
             className='label'
             >Edit Task
             </label>
         </div>
            <button
             className='btn'
             aria-label='Update Task'
             type='submit'
             >
        
                <CheckIcon strokeWidth={2} width={24} height={24}/>
             </button>
        </form>
    </div>
  )
}

export default EditForm