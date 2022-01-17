import { Navbar, Nav } from 'react-bootstrap';
import destinyLogo from '../../Images/destiny-lolo-transparent.png';

import "./Navbar.scss";


const NavbarComponent = () => {

    return (
        <>
        <Navbar bg='dark' variant='dark'>
            <Navbar.Brand
            className='logo'>
                <img
                src={destinyLogo}
                className='logo-img'
                >
                </img>
            </Navbar.Brand>
            <Navbar.Brand>Destiny 2 Team Viewer</Navbar.Brand>
            <Nav>
                <Nav.Link>Friendly Guardians</Nav.Link>
                <Nav.Link>Opposing Guardians</Nav.Link>
            </Nav>
        </Navbar>
    </>
    );
}

export default NavbarComponent;
