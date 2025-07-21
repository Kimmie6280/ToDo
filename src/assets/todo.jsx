import React, { useState } from "react"


function ToDoList(){

    const [tasks, setTasks] = useState(["Eat","Sleep","Study"]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(e){
        setNewTask(e.target.value);
    }

    function addTask(){

        if (newTask.trim() != ""){
            setTasks(t => [...tasks,newTask])
            setNewTask("")
            alert("You have added a task ")
        }
       
    }

    function deleteTask(index){

        const updateTask = tasks.filter((element, i) =>i !== index);
        setTasks(updateTask)
        alert("You have removed a task")

    }

    function moveTaskUp(index){
         const updatedTask = [...tasks]
        if (index > 0){
           
            [updatedTask[index], updatedTask[index-1]] = 
            [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask)
            console.log("clicked up")
            alert("You have moved a task up ")


        
        }
    }

     function moveTaskDown(index){
        
         const updatedTask = [...tasks]
        if (index < tasks.length-1){
           
            [updatedTask[index], updatedTask[index+1]] = 
            [updatedTask[index+1], updatedTask[index]]
            setTasks(updatedTask)
            alert("You have moved a task down")
        
        }
    }
    

    return(
        <div className = "to-do-list">
            <h1>To Do List</h1>

            <div>
                <input type="text"
                placeholder="Enter a task"
                value={newTask}
                onChange={handleInputChange}/>

                <button class="add-button" 
                onClick={addTask}>
                    Add new Task
                </button>
            </div>

            <ol>
                {
                    tasks.map((task,index) =>
                    <li key ={index}>
                        <span className="text">{task}</span>
                        <button className="delete-btn"
                        onClick={() => deleteTask(index)}>
                            Delete  
                        </button>
                        <button className="move-up-btn"
                        onClick={() => moveTaskUp(index)}>
                            ⬆️
                        </button>
                         <button className="move-down-btn"
                        onClick={() => moveTaskDown(index)}>
                            ⬇️
                        </button>
                    </li>
                )}
            </ol>


        </div>
    )

}


export default ToDoList