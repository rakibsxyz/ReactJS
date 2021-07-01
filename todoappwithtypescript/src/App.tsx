import React, { FC, useState, ChangeEvent } from 'react';
import { number } from 'yargs';
import "./App.css";
import { ITask } from './Interfaces';
import TodoTask from './Components/TodoTask'
const App = () => {

  const [task, setTask] = useState<string>("");
  const [deadline, setDeadline] = useState<number>(0);
  const [todo, setTodo] = useState<ITask[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.name === 'task') {
      setTask(event.target.value);
      console.log(task);
    }
    else {
      setDeadline(Number(event.target.value))
      console.log(deadline)
    }
  }

  const addTask =() => {
    const newTask = {taskName:task, deadLine: deadline};
    setTodo([...todo, newTask])
    console.log(todo);
    setDeadline(0)
    setTask("");
  }

  const deleteTask =(taskNameToDelete: string) => {
    setTodo(todo.filter((task) => {
      return task.taskName !== taskNameToDelete
    }))
  }
  

  return (
    <div className="App">
      <div className="header">
        <div className="inputContainer">
          <input type="text" name="task" value={task} placeholder= "Task..." onChange={handleChange} />
          <input type="number" name="deadline" value={deadline} placeholder= "Days..." onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
     <div className="todoList">
      {todo.map((task: ITask, key:number) => {
        return <TodoTask task= {task} key={key} deleteTask={deleteTask}></TodoTask>
      })}
     </div>
    </div>
  );
}

export default App;
