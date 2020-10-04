import React, { useState } from 'react';
import './../App.css';

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


    return (
        <div className='todo-container'>
            <h2>To Do App</h2>

            {taskToBeAdded
                ?
                <form action="" onSubmit={(event) => handleSubmit(event)} >
                    <div className='input-container'>
                        <h4>Enter Task to be added</h4>
                        <input className='text-input' type="text" value={input} name='task' onChange={handleInputChange} autoFocus required /><br />
                        <input className='button' type='submit' />
                    </div>
                </form>

                :
                <div className='tasks-container'>
                    <h2>Tasks</h2>
                    <button className='button' onClick={() => setTaskToBeAdded(true)}>Add task</button>
                    <hr />
                    <div className='tasks'>
                        {noTasks
                            ?
                            <div className='no-tasks'>
                                <h4 >Looks like there are no tasks !! <br /> <span className='add'>(To add click "Add Task")</span></h4>
                            </div>


                            :
                            <ol>
                                {tasks.map((task, index) => (
                                    <li key={index}>{task}</li>
                                ))}

                            </ol>
                        }

                    </div>
                </div>
            }

        </div >
    )
}

export default TodoApp;