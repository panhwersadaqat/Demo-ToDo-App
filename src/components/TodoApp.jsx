import React, { useState } from 'react';
import './../App.css';
import { DeleteBtn } from './../images/circle-cropped.png';

const TodoApp = () => {
    // State 
    const [taskToBeAdded, setTaskToBeAdded] = useState(false);
    const [noTasks, setNoTasks] = useState(true);
    let [tasks, setTasks] = useState([]);
    let [input, setInput] = useState('');

    // Handle Input change
    const handleInputChange = (e) => {
        setInput(e.target.value);
    }

    // Add Tasks
    const handleSubmit = (event) => {
        event.preventDefault();
        setTasks([...tasks, input]);
        setInput('');
        setTaskToBeAdded(false);
        setNoTasks(false);
    }

    // Delete All Tasks
    const handleDeleteAll = () => {
        setTasks([]);
        setNoTasks(true);
    }

    // Delete Task
    const handleDelete = (taskToRemove) => {
        if (tasks.length > 1) {
            setTasks(tasks.filter((task) => task !== taskToRemove));
        } else {
            setTasks(tasks.filter((task) => task !== taskToRemove));
            setNoTasks(true);
        }
    }


    return (
        <div className='todo-container'>
            <h2>To Do App</h2>

            {taskToBeAdded
                ?
                <form action="" onSubmit={(event) => handleSubmit(event)} >
                    <div className='input-container'>
                        <h4>Enter Task to be added</h4>
                        <input className='text-input' type="text" value={input} name='task' onChange={handleInputChange} autoFocus required /><br />
                        <input className='button' type='button' onClick={() => setTaskToBeAdded(false)} value='Back to the list' />
                        <input className='button green' type='submit' value='Add +' />


                    </div>
                </form>

                :
                <div className='tasks-container'>
                    <h2>Tasks</h2>
                    <button className='button green' onClick={() => setTaskToBeAdded(true)}>Add task +</button>
                    <hr />
                    <div className='tasks'>
                        {noTasks
                            ?
                            <div className='no-tasks'>
                                <h4 >  <span className='add'>(To add click "Add Task")</span></h4>
                            </div>


                            :
                            <ol>
                                {tasks.map((task, index) => (
                                    <div className='task' key={index}>
                                        <li id={index}>{task}</li><div onClick={() => handleDelete(task)}></div>

                                    </div>
                                ))}

                            </ol>
                        }

                    </div>
                    {noTasks ? <></> : <button className='button bottom red' onClick={() => handleDeleteAll()}>Delete All</button>}

                </div>
            }

        </div >
    )
}

export default TodoApp;