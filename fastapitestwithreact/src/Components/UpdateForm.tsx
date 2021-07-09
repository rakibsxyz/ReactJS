import React, { ChangeEvent, useState } from 'react'
import { IStudents } from '../interfaces'
interface Props {
    // onHandleChange(e:ChangeEvent<HTMLInputElement>): void;
    student: IStudents;
    studentUpdate(stuId:number, name:string): void;
}

function UpdateForm({ student, studentUpdate }: Props) {

    const [name, setName] = useState<string>(student.name)
    const [stuId, setstuId] = useState<number>(student.stuId)

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

    return (
        <div>
            <form>
                <input type="text" name="name" value={name} onChange={onHandleChange} ></input>
                <input type="number" name="stuId" value={stuId} onChange={onHandleChange} ></input>
            </form>
            <button onClick={() =>{
                studentUpdate(stuId,name); }}>Submit</button>
        </div>
    )
}

export default UpdateForm
