import React,{useState, useEffect} from 'react';
import axios from "axios";
import './App.css';
import StudentComponent from './Components/StudentComponent'
import {IStudents} from './interfaces'

const App = () => {

  const [students, setStudents] = useState<IStudents[] | null >(null)

 
  const getAllStudent = () =>{
    axios.get<IStudents[]>(`http://127.0.0.1:8000/student`)
    .then((res) => {
      // setStudents(res.data);
      console.log(res.data);
      // const resData = res.data
      setStudents(res.data)
    })
    .catch((err) => {
      console.log("Something is wrong")
    })
  }



  return (
    <div className="App">
    <div className="left">
      <h1>Students</h1>
      <StudentComponent getAllStudent={getAllStudent} ></StudentComponent>
    {students && <h1>{students[0].name}</h1> }
    </div>
    <div className="right">
      <h1>Right</h1>
    </div>
    </div>
  );
}

export default App;
