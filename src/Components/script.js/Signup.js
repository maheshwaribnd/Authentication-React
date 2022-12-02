import { useEffect, useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';             
import '../style.css/SignUp.css'

const SignUpPage = () => {

    const [userData, setUserData] = useState({
        FullName: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
    })

    const [error, setError] = useState({
        FullName: false,
        Email: false,
        Password: false,
        ConfirmPassword: false
    })

    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate();

    const Submit = (e) => {

        navigate('/profile')
        e.preventDefault();

        const { FullName, Email, Password, ConfirmPassword } = userData;
        console.log(FullName.length)

        if (FullName.length >= 3) {
            console.log('hi')
            setError((previousError) => ({
                ...previousError,
                FullName: false
            }))
        }
        else {
            console.log('mahi')
            setError((previousError) => ({
                ...previousError,
                FullName: true
            }))
        }
        console.log(error)

        if (
            Email.includes("@") &&
            Email.includes(".") &&
            Email.indexOf("@") != 0 &&
            Email.length - Email.lastIndexOf(".") >= 3
        ) {
            setError((previousError) => ({
                ...previousError,
                Email: false
            }))
        }
        else {
            setError((previousError) => ({
                ...previousError,
                Email: true
            }))
        }

        if (Password.length >= 6) {
            setError((previousError) => ({
                ...previousError,
                Password: false
            }))
        }
        else {
            setError((previousError) => ({
                ...previousError,
                Password: true
            }))
        }

        if (ConfirmPassword === Password) {
            setError((previousError) => ({
                ...previousError,
                ConfirmPassword: false
            }))
        }
        else {
            setError((previousError) => ({
                ...previousError,
                ConfirmPassword: true
            }))
        }

        window.localStorage.setItem("uesrData",JSON.stringify(userData));
        setUserData({...userData, random: (Math.random()+' ').substring(2,10)+(Math.random()+' ').substring(2,10)});
        console.log(userData);
        // navigate('/profile')
        
    }

    return (
        <div id="container">
            {success && (
                <Alert variant="success">Your details were saved successfully!</Alert>
            )}
            <Form>
                <h1>SignUp</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Full Name</Form.Label> */}
                    <Form.Control className='input'
                        type="text"
                        placeholder="Full Name"
                        value={userData.FullName}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                FullName: e.target.value,
                            })
                        }
                    />
                    {submit && !success && (error.FullName ?
                        <Form.Control.Feedback type="invalid">
                            Please Enter a valid FullName.
                        </Form.Control.Feedback> :
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    {/* <Form.Label>Email</Form.Label> */}
                    <Form.Control className='input'
                        type="email"
                        placeholder="Email"
                        value={userData.Email}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                Email: e.target.value,
                            })
                        }
                    />
                    {submit && !success && (error.Email ?
                        <Form.Control.Feedback type="invalid">
                            Please Enter a valid Email.
                        </Form.Control.Feedback> :
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control className='input'
                        type="password"
                        placeholder="Password"
                        value={userData.Password}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                Password: e.target.value,
                            })
                        }
                    />
                    {submit && !success && (error.Password ?
                        <Form.Control.Feedback type="invalid">
                            Password should contain a 6 character
                        </Form.Control.Feedback> :
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    {/* <Form.Label>Confirm Password</Form.Label> */}
                    <Form.Control className='input'
                        type="password"
                        placeholder="Confirm Password"
                        value={userData.ConfirmPassword}
                        onChange={(e) =>
                            setUserData({
                                ...userData,
                                ConfirmPassword: e.target.value,
                            })
                        }
                    />
                    {submit && !success && (error.Password ?
                        <Form.Control.Feedback type="invalid">
                            Password does not match !
                        </Form.Control.Feedback> :
                        <Form.Control.Feedback type="valid">
                            Looks good!
                        </Form.Control.Feedback>
                    )}
                </Form.Group>

                <Button variant="dark" type='button' onClick={Submit}>SignUp</Button>
            </Form>
        </div>
    );
}

export default SignUpPage;