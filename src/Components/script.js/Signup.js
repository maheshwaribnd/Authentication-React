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
        FullName: true,
        Email: true,
        Password: true,
        ConfirmPassword: true
    })

    const [submit, setSubmit] = useState(false)
    const [success, setSuccess] = useState(false)

    const navigate = useNavigate();

    const Submit = (e) => {

        // navigate('/profile')
        e.preventDefault();

        if (userData.FullName.length >= 3) {
            setError((previousError) => ({
                ...previousError,
                FullName: false
            }))
            console.log(error.FullName);
        }
        else {
            setError((previousError) => ({
                ...previousError,
                FullName: true
            }))
            console.log(error.FullName);
        }
        console.log(error)

        if (
            userData.Email.includes("@") &&
            userData.Email.includes(".") &&
            userData.Email.indexOf("@") != 0 &&
            userData.Email.length - userData.Email.lastIndexOf(".") >= 3
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

        if (userData.Password.length >= 6) {
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

        if (userData.ConfirmPassword === userData.Password && userData.ConfirmPassword.length >= 6) {
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

        window.localStorage.setItem("uesrData", JSON.stringify(userData));
        setUserData({ ...userData, random: (Math.random() + ' ').substring(2, 10) + (Math.random() + ' ').substring(2, 10) });
        console.log(userData);

        console.log(error)
        if( error.FullName === false &&
            error.Email === false &&
            error.Password === false &&
            error.ConfirmPassword === false)
            {
            navigate('/profile')
        }
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
                    {error.FullName ? <p> Please Enter a valid FullName.</p> : null}
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
                    {error.Email ? <p> Please Enter a valid Email.</p> : null}
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
                    {error.Email ? <p> Password should contain a 6 character</p> : null}
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
                    {error.Email ? <p> Password does not match !</p> : null}
                </Form.Group>

                <Button variant="dark" type='button' onClick={Submit}>SignUp</Button>
            </Form>
        </div>
    );
}

export default SignUpPage;
