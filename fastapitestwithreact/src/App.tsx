import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from "axios";
import './App.css';
import StudentComponent from './Components/StudentComponent'
import { IStudents } from './interfaces'
import UpdateForm from './Components/UpdateForm';

const App = () => {

  const [students, setStudents] = useState<IStudents[] | null>(null)
  const [updateBoolean, setUpdateBoolean] = useState<boolean>(false)

  const [name, setName] = useState<string>("")
  const [stuId, setstuId] = useState<number>(0)
  const tempStudent: IStudents = {name:"name",stuId:0}
  // setStudentForUpdate(tempStudent)
  const [studentForUpdate, setStudentForUpdate] = useState<IStudents>(tempStudent)
  

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    }
    else {
      setstuId(Number(event.target.value));
    }
  }

  const getAllStudent = () => {
    axios.get<IStudents[]>(`http://127.0.0.1:8000/student`)
      .then((res) => {
        // setStudents(res.data);
        console.log(res.data);
        // const resData = res.data
        setStudents(res.data)
      })
      .catch((err) => {
        console.log("Something is wrong")
        console.log(err)
      })
  }
  // axios.post<IStudents>(``,student)
  // .then((res) =>{
  //   console.log("done adding")
  // })
  const createStudentProfile = (name: string, stuId: number) => {
    const student: IStudents = { name, stuId }
    var stud = { name: name, stuID: stuId }
    console.log("Ascchi ekhane")

    axios({
      method: 'post',
      url: 'http://127.0.0.1:8000/student',
      data: student
    })
      .then((res) => {
        console.log("done adding")
      })
      .catch((err) => {
        console.log("Something error man!")
        console.log(err)
      })
  }

  const createUpdateForm = (student: IStudents) => {
    setUpdateBoolean(true)
    setStudentForUpdate(student)
   
  }




  return (
    <div className="App">
      <div className="left">
        <h1>Students</h1>
        <StudentComponent getAllStudent={getAllStudent} createStudentProfile={createStudentProfile}></StudentComponent>

      </div>
      <div className="right">
        {students && students.map((student, key: number) => {
          return <div>  <h1>{student.name}</h1>
            <button onClick={()=>{createUpdateForm(student);}}>Update</button>
            
            
            <button>Delete</button>
          </div>
        })}
      </div>
      <div>{updateBoolean && <UpdateForm  onHandleChange={(e: ChangeEvent<HTMLInputElement>) =>{
                onHandleChange(e);}} student={studentForUpdate}/> }</div>
    </div>
  );
}

export default App;
