import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import {
  MDBCollapse,
  MDBContainer,
  MDBDropdown,
  MDBDropdownItem,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBIcon,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
} from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
 const Navbar = () => {
gsap.registerPlugin(ScrollTrigger)
  const [show, setShow] = useState(false);
   const headerRef=useRef(null)
  useEffect(()=>{
   const el=headerRef.current
   gsap.to(el,{
    position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      border: "1px solid gray",
      borderRadius: "0 0 20px 20px",
      backgroundColor:"black",
      duration: 1,
      zIndex:9999,
      ease: "power1.out",
      scrollTrigger: {
        trigger: el,
        start: "bottom+=500 top",
        end: "+=250",
        scrub: true,
      }
   })
  },[])

 
  const navbar = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "event", title: "Event" },
    { id: "gallery", title: "Gallery" },
    { id: "reservation", title: "Reservation" },
    { id: "news", title: "News" },
  ];
  return (
    <Wrapper ref={headerRef}>
      <MDBNavbar expand="md">
        <MDBContainer fluid>
          <NavLink to="/">
            <img src={logo} alt="logo" />
          </NavLink>

          <MDBNavbarToggler onClick={() => setShow(!show)}>
            <MDBIcon icon="bars" fas style={{ color: "white" }} />
          </MDBNavbarToggler>
          <MDBCollapse show={show} navbar>
            <MDBNavbarNav
              right
              fullWidth={false}
              className="d-flex justify-content-between align-items-center gap-5"
            >
              {navbar.map((link) => {
                return (
                  <a
                    href={`#${link.id}`}
                    key={link.id}
                    style={{ fontSize: "18px" }}
                  >
                 {link.title}
                    
                  </a>
                );
              })}
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  background-color: transparent;
  a:focus-within {
    color: var(--textpink);
  }
 
`;
export default Navbar;
