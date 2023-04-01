import React, { useEffect, useState } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { CheckIcon } from '@heroicons/react/24/outline'

const EditForm = ({editedTask, handleUpdateTask, closeEditMode}) => {
    const [updateTask, setUpdateTask] = useState(editedTask.name)


    useEffect(() => {
        const closeModalIfEscape = (e) => {
            e.key === 'Escape' && closeEditMode()
            
        }
        window.addEventListener('keydown', closeModalIfEscape)


        return () => {
            window.removeEventListener('keydown', closeModalIfEscape)
        }
    }, [closeEditMode])
    const handleSubmit = (e) => {
        e.preventDefault()
        handleUpdateTask({...editedTask, name: updateTask})  
    }
  return (
    <div 
    role="dialog" 
    aria-labelledby='editTask'
    onClick={(e) => {e.target === e.currentTarget && closeEditMode()}}
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