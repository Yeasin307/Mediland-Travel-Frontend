import React from 'react';
import styles from './Navigation.module.css';
import { Container, Dropdown, Image, Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {

    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand className='text-primary fs-3 fw-bold'>Mediland Travel</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                    <Nav>

                        <Nav.Link className={`${styles.navHover} ${styles.nav} text-primary`}>Home</Nav.Link>
                        <Nav.Link className={`${styles.navHover} ${styles.nav} text-primary`}>About</Nav.Link>
                        <Nav.Link className={`${styles.navHover} ${styles.nav} text-primary`}>Contact</Nav.Link>

                        <Dropdown>

                            <Dropdown.Toggle style={Styles.dropdownToggle} variant="success" id="dropdown-basic">
                                <Image style={Styles.image} src='https://lh3.googleusercontent.com/ogw/ADea4I7MnfpiHoFUsHQ9Y8J1zlne0gmtFQagvk3qzCut8w=s64-c-mo'></Image>
                            </Dropdown.Toggle>

                            <Dropdown.Menu align={{ lg: 'end' }} style={Styles.menu} >
                                <Dropdown.Item>Profile</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item >Logout</Dropdown.Item>
                            </Dropdown.Menu>

                        </Dropdown>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

const Styles = {
    dropdownToggle: {
        width: '50px',
        height: '50px',
        background: 'none',
        margin: '0px',
        padding: '0px',
        border: 'none',
        borderRadius: '50%'
    },
    image: {
        width: '100%',
        borderRadius: '50%'
    },
    menu: {
        marginTop: '10px',
        width: '25%'
    }
}

export default Navigation;