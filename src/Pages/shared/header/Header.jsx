import React, { useState } from 'react'
import Hand from '../../../assets/img/handHeader.png'
import ProfileImg from '../../../assets/img/profileImg.png'
import '../header/HeaderStyles.css'
import {NavLink, useLocation, useNavigate} from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isHomePage = location.pathname === '/home' || location.pathname === '/'

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false);
  }

  return (
    // <div className='d-flex justify-content-between align-items-center w-100 p-3'>
    //   {isHomePage ? (
    //    <div className='d-flex justify-content-center align-items-center'>
    //      <img src={Hand} alt="Mano saludando en header" className='me-2 mb-2 headerHand'/>
    //      <p className='header mb-0 '>Hola Julia!</p>
    //    </div>
    //   ) : (
    //     <NavLink to='/home'>
    //       <FaArrowLeft size={30} color='#432C81'/>
    //     </NavLink>
    //   )}
    //    <div className='profile-container' tabIndex={0} onBlur={closeMenu}>
    //     <img 
    //       src={ProfileImg} 
    //       alt="Profile picture" 
    //       className='profilePicture'
    //       onClick={toggleMenu}
    //     />

    //     {/* {isMenuOpen && ( */}
    //       <div className='dropdown-menu'>
    //         <NavLink to="/profile" className="dropdown-item">Mi perfil</NavLink>
    //         <NavLink to="/settings" className="dropdown-item">Configuración</NavLink>
    //         <NavLink to="/logout" className="dropdown-item">Cerrar sesión</NavLink>

    //       </div>
    //     {/* )} */}

    //    </div>
    // </div>
    <>
      {[false].map((expand) => (
        <Navbar key={expand} expand={expand}>
          <Container fluid>
            {isHomePage ? (
            <div className='d-flex justify-content-center align-items-center'>
              <img src={Hand} alt="Mano saludando en header" className='me-2 mb-2 headerHand'/>
              <p className='header mb-0 '>Hola Julia!</p>
            </div>
            ) : (
              <NavLink to='/home'>
                <FaArrowLeft size={30} color='#432C81'/>
              </NavLink>
            )}
            <Navbar.Toggle className='navbar-img'><img 
              src={ProfileImg}               
              className='profilePicture'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`${expand}`}
            /></Navbar.Toggle>
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand} `}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="text-center mt-5 gap-2">
                  <Nav.Link href="/perfil" className="fs-4">Mi perfil</Nav.Link>
                  <Nav.Link href="/configuracion" className="fs-4">Configuracion</Nav.Link>
                  <Nav.Link href="/logout" className="fs-4">Cerrar sesión</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default Header