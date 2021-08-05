import React, { useRef, useState, FormEvent } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'


export default function Signup() {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passwordRef = useRef<HTMLInputElement | null>(null)
    const confirmPasswordRef = useRef<HTMLInputElement | null>(null)
    const { signup } = useAuth()
    const [error, setError] = useState<string>("")
    const [loading, setLoading] = useState<boolean>(false)
    const history = useHistory()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // suppressed this null value :3 
        if (passwordRef.current!.value !==
            confirmPasswordRef.current!.value) {
            return setError("Passwords do not match")
        }

        try {
            setError("")
            setLoading(true)
            await signup(emailRef.current!.value, passwordRef.current!.value)
            history.push("/")
            // setLoading(false)
            setLoading(false)
        } catch {
            setError("Failed to create user")

        }
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
                Already have an account? <Link to="/login">Log in</Link>
            </div>
        </>
    )
}
