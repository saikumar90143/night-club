import { MDBBtn, MDBContainer, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Description = () => {
  return (
    <Wrapper className="mb-5">
      <MDBContainer fluid>
        <section className="mx-lg-5">
            <h6 style={{color:"var(--textpink)"}} className='ls-wider'>UNDERGROUND FAVES</h6>
          <MDBTypography style={{fontFamily:"poppins",fontWeight:"400",letterSpacing:'2px',fontSize:'clamp(0.7rem,2.5vw,1.8rem)'}} className='text-start text-break'>
            Maybe you’re needing to blow off some serious steam with an
            all-night party, or wanting to impress someone special with a venue
            that’s a little more discreet and sophisticated. Either way, if
            you’re looking to dance the night away, check out one of the lively
            music venues, dance halls, and raucous haunts.
          </MDBTypography>
          <MDBBtn className="button mx-auto"><Link to='' className="fs-6  text-nowrap ls-1">Get in Touch</Link></MDBBtn>

        </section>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper=styled.section`

    .button{
        transition: all 0.5s ease-out;
        background-color: white;
        
        a{

            color:var(--textpink);
        }
        
        :hover{
            a{
                color: white;
            }
            background-color: var(--textpink);
    }
    }

`
export default Description;
