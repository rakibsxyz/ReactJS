import React, { useState, useRef } from 'react'
import { useAuth } from '../Contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import {Button, Form, Card} from 'react-bootstrap'
// import * as admin from 'firebase-admin'
import firebase from 'firebase'

export default function Users() {

    const nameRef = useRef<HTMLInputElement | null>(null)
    const ageRef = useRef<HTMLInputElement | null >(null)
    const {currentUser} = useAuth()
    // const [userList, setUserList] = useState()
    const [loading, setLoading] = useState<boolean>(false)
    


    const addUser=()=> {
        setLoading(true)
        const userRef = firebase.database().ref("User");
        const user = {
            name: nameRef.current!.value,
            age: ageRef.current!.value,
            email: currentUser.email
        }

        userRef.push(user)
        console.log("user added")
        setLoading(false)
    }

    return (
       
        <>
            <Card.Body>
                <h2 className="text-center mb-4 ">Add User</h2>

                {/* {error && <Alert variant="danger">{error}</Alert>} */}
                <Form onSubmit={addUser}>
                    <Form.Group id="email">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control type="Name"
                            ref={nameRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control 
                            ref={ageRef} required></Form.Control>
                    </Form.Group>
                   
                    <Button disabled={loading} className="w-100"
                        type="submit">Save</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                <Link to="/all-user">All User</Link>
            </div>
           
        </>
    )
}
