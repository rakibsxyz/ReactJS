import React,{ ChangeEvent } from 'react'
interface Props{
    onHandleChange(e:ChangeEvent<HTMLInputElement>): void;
}

function InputForm({onHandleChange}:Props) {
    return (
        <div>
             <form>
                <input type="text" name="name" onChange={onHandleChange} ></input>
                <input type="number" name="stuId"  onChange={onHandleChange} ></input> 
            </form> 
        </div>
    )
}

export default InputForm
