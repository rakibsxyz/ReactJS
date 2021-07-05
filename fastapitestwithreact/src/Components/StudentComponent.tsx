import React from 'react'

interface Props{
    getAllStudent(): void;
}

export default function StudentComponent({getAllStudent}:Props) {

    


    return (
        <div>
            <button onClick={()=> {
                getAllStudent(); }}>All Student</button>
            <button >Create Student Profile</button>
        </div>
    )
}
