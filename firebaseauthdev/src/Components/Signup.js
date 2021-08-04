import React, { useRef, useState} from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from '../Contexts/AuthContext'


export default function Signup() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            // setLoading(false)
        } catch {
            setError("Failed to create user")
           
        }
        setLoading(false)

    }

    return (
        <>
            <Card.Body>
                <h2 className="text-center mb-4 ">Sign Up</h2>
              
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" 
                        ref={emailRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" 
                        ref={passwordRef} required></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password" 
                        ref={confirmPasswordRef} required></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100" 
                    type="submit">Sign Up</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                Already have an account? Log in
            </div>
        </>
    )
}
