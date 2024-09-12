import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

function NavBar({ navItems, logoImage, topBarInfo }) {
    const [isScroll, setIsScroll] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");

    const handleSetActive = (link) => {
        setActiveLink(link);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="NAVBAR">
            <div className="bg-body-tertiary">
                <div className="nav-top container-fluid bg-color py-2 d-none d-sm-block">
                    <Container className="d-flex justify-content-between align-items-center">
                        <p className='mb-0 text-light'>
                            <FontAwesomeIcon icon={faClock} /> {topBarInfo.days} {topBarInfo.hours}
                        </p>
                        <p className='mb-0 text-light'>
                            <FontAwesomeIcon icon={faMobileScreen} /> {topBarInfo.contact}
                        </p>
                    </Container>
                </div>
                <Navbar expand="lg" className={`bg-body-tertiary ${isScroll ? 'fixed-top' : ''} container-fluid`}>
                    <Container className='d-flex justify-content-between align-items-center'>
                        <img src={logoImage} alt="logo" className='image-width' />
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='flex-grow-0'>
                            <Nav navbarScroll className='h-100'>
                                {navItems.map((item) =>
                                    item.type === 'link' ? (
                                        <Nav.Link
                                            key={item.href}
                                            href={item.href}
                                            className={`text-center ${activeLink === item.href ? "active" : ""}`}
                                            onClick={() => handleSetActive(item.href)}
                                        >
                                            {item.label}
                                        </Nav.Link>
                                    ) : (
                                        <NavDropdown
                                            key={item.title}
                                            title={item.title}
                                            id="navbarScrollingDropdown"
                                            className={`text-center ${item.dropdownItems.some(i => activeLink === i.href) ? "active" : ""}`}
                                        >
                                            {item.dropdownItems.map((dropdownItem) => (
                                                <NavDropdown.Item
                                                    key={dropdownItem.href}
                                                    href={dropdownItem.href}
                                                    className={activeLink === dropdownItem.href ? "active" : ""}
                                                    onClick={() => handleSetActive(dropdownItem.href)}
                                                >
                                                    {dropdownItem.label}
                                                </NavDropdown.Item>
                                            ))}
                                        </NavDropdown>
                                    )
                                )}
                                <Nav.Link
                                    href="#contact"
                                    className={`text-center ${activeLink === "#contact" ? "active" : ""}`}
                                    onClick={() => handleSetActive("#contact")}
                                >
                                    CONTACT
                                </Nav.Link>
                            </Nav>
                            <div className="btns d-flex justify-content-center">
                                <button type="button" className="border-0 rounded py-2 bg-color text-light px-4">Make an Appointment</button>
                            </div>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
}

export default NavBar;



