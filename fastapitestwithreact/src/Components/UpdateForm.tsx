import React,{ ChangeEvent } from 'react'
import { IStudents } from '../interfaces'
interface Props{
    onHandleChange(e:ChangeEvent<HTMLInputElement>): void;
    student: IStudents ;
}

function UpdateForm({onHandleChange,student}:Props) {
    return (
        <div>
             <form>
                <input type="text" name="name" value={student.name} onChange={onHandleChange} ></input>
                <input type="number" name="stuId" value={student.stuId}  onChange={onHandleChange} ></input> 
            </form> 
        </div>
    )
}

export default UpdateForm
