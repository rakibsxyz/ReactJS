import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../Contexts/AuthContext'


export default function UpdateProfile() {

    const emailRef = useRef()
    const passwordRef = useRef()
    const confirmPasswordRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !==
            confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }

        setLoading(true)
        setError("")
        const promises = []
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/")
        }).catch(() => {
            setError("Failed to update")
        }).finally(() => {
            setLoading(false)
            // setError("")
        })


    }


    return (
        <>
            <Card.Body>
                <h2 className="text-center mb-4 ">Update Profile</h2>

                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group id="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email"
                            ref={emailRef} required
                            defaultValue={currentUser.email}></Form.Control>
                    </Form.Group>
                    <Form.Group id="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            ref={passwordRef} required
                            placeholder="Leave blank to keep the same"></Form.Control>
                    </Form.Group>
                    <Form.Group id="password-confirm">
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control type="password"
                            ref={confirmPasswordRef} required
                            placeholder="Leave blank to keep the same"></Form.Control>
                    </Form.Group>
                    <Button disabled={loading} className="w-100"
                        type="submit">Update</Button>
                </Form>
            </Card.Body>
            <div className="w-100 text-center mt-2">
                <Link to="/">Cancel</Link>
            </div>
        </>
    )
}
