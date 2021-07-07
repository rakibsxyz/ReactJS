import React, {ChangeEvent, useState} from 'react'
import InputForm from './InputForm'
interface Props{
    getAllStudent(): void;
    createStudentProfile(name:string, stuID:number): void;
}

export default function StudentComponent({getAllStudent,createStudentProfile}:Props) {

    const [name, setName] = useState<string>("")
    const [stuId, setstuId] = useState<number>(0)

    const onHandleChange = (event: ChangeEvent<HTMLInputElement>) =>{ 
        if(event.target.name === "name"){
            setName(event.target.value);
        }
        else {
            setstuId(Number(event.target.value));
        }
    }


    return (
        <div>
            <button onClick={()=> {
                getAllStudent(); }}>All Student</button>
            <InputForm onHandleChange={(e: ChangeEvent<HTMLInputElement>) =>{
                onHandleChange(e);}}></InputForm>
             
            <button onClick ={() => { 
                    createStudentProfile(name,stuId); }} >Create Student profile</button>
           
        </div>
    )
}
