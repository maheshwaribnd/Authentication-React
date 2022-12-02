import { Nav, Navbar, Container } from 'react-bootstrap';
import '../style.css/Navbar.css'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Nav className="me-auto">
                    <Link to="/" className='text'>Home</Link>
                </Nav>
                <Nav className="me-right">
                    <Link to='/signup' className='text'>Signup</Link>
                    <Link to="/profile" className='text'>Profile</Link>
                </Nav>
            </Navbar>
        </header>
    );
}

export default Navigation;