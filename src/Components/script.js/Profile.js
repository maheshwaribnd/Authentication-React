import { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../style.css/Profile.css'

const Profile = () => {

    let getData = window.localStorage.getItem("uesrData");
    const user_data = JSON.parse(getData);
    const [data, setData] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        if (user_data == null) {
            setTimeout(() => {
                navigate("/signup");
            }, 400);
        } else {
            setData(user_data);
        }
    }, []);

    const Logout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <div id="profilepage">
            <h1>User Profile</h1>
            <Form.Group className="mb-3 profiletext" controlId="formBasicEmail">
                <Form.Label>Name : { data.FullName } </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3 profiletext" controlId="formBasicPassword">
                <Form.Label>Email : { data.Email } </Form.Label>
            </Form.Group>

            <Form.Group className="mb-3 profiletext" controlId="formBasicEmail">
                <Form.Label>Password : { data.Password } </Form.Label>
            </Form.Group>

            <Button onClick={Logout} variant="dark" type='button'>Logout</Button>
        </div>
    );
}

export default Profile;