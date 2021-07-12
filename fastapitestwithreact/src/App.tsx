import React, { useState, useEffect, ChangeEvent } from 'react';
import axios from "axios";
import './App.css';
import StudentComponent from './Components/StudentComponent'
import { IStudents } from './interfaces'
import UpdateForm from './Components/UpdateForm';

const App = () => {

  const [students, setStudents] = useState<IStudents[]>([])
  const [updateBoolean, setUpdateBoolean] = useState<boolean>(false)

  const [name, setName] = useState<string>("")
  const [stuId, setstuId] = useState<number>(0)
  const tempStudent: IStudents = {name:"name",stuId:0}
  // setStudentForUpdate(tempStudent)
  const [studentForUpdate, setStudentForUpdate] = useState<IStudents>(tempStudent)
  

  const onHandleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "name") {
      setName(event.target.value);
      console.log(name)
    }
    else {
      setstuId(Number(event.target.value));
      console.log(stuId)
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

    // axios({
    //   method: 'post',
    //   ,
    //   data: student
    // })
    const url= 'http://127.0.0.1:8000/student';
    axios.post<IStudents>(url,student)
      .then((res) => {
        setStudents(students => [...students,res.data])
        // console.log(students)
      
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

  const studentUpdate = (stuId: number, name:string) => {
    console.log(stuId)
    const tempStu: IStudents = {stuId: stuId, name:name}
    const url = "http://127.0.0.1:8000/student/"+stuId;

    axios.put<IStudents[]>(url,tempStu)
    .then((res) => {
      // setStudents(students => [...students,res.data])
      // console.log(students)
      setStudents(res.data)
    })
    .catch((err) =>{
      console.log("Error khaise")
    })
  }

  const deleteStudent = (id:number) => {
    const url = "http://127.0.0.1:8000/student/"+id;
    axios.delete<string>(url)
    .then((res)=>{
      console.log(res)
      setStudents(students.filter((student) => {
        return student.stuId !== id
      }))
    })
    .catch((err) =>{
      console.log("problem in deletion")
    })
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
            <button onClick={()=>{
              deleteStudent(student.stuId);
            }}>Delete</button>
          </div>
        })}
      </div>
      <div>{updateBoolean && <UpdateForm student={studentForUpdate} studentUpdate={studentUpdate}/> }</div>
    </div>
  );
}

export default App; 
