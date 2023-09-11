import { MDBBtn, MDBCardImage, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import glob from "../../assets/hero glob.png";
import heroimage from "../../assets/hero1.jpg";
import blueoverlay from "../../assets/heroverlayblue.png";
import pinkoverlay from "../../assets/herooverlaypink.png";
import { Link } from "react-router-dom";
import Description from "./Description";
const Hero = () => {
  return (
    <Wrapper>
      <MDBRow className="g-4 mb-8 py-3">
        {/* content */}
        <MDBCol
        
          size="12"
          md="6"
          className="overlay-blue text-start d-flex align-items-start flex-column justify-content-center"
        >
          <MDBTypography tag="h5" data-aos='fade-up' data-aos-duration='1000'> WELCOME TO THE PARTY</MDBTypography>
          <MDBTypography tag="h1" data-aos='fade-up' data-aos-duration='1500'>
            JOIN THE <br />
            CLUB <MDBCardImage src={glob} alt="glob" className="glob" />
          </MDBTypography>
          <p data-aos='fade-up' data-aos-duration='2000' data-aos-offset='0'>
            Booths, high tables and stools, long bar, hanging glass racks,
            mirror behind the bar, hundreds of different alcohol bottles,
            stools, kick plate along bar, straws, sprayers, TVs,
            beer/wine/highball/martini glasses, beer on tap, shot glasses, bowls
            of peanuts/pretzels…
          </p>
          <section className="d-flex gap-3 align-items-center">
            <MDBBtn className="button"><Link to='' className="fs-6  text-nowrap ls-1">Get in Touch</Link></MDBBtn>
            <h5 className="social text-nowrap"><span>FB</span>-<span>INST</span>-<span>TW</span></h5>
          </section>
        </MDBCol>
        {/* hreo image */}
        <MDBCol size="12" md="6" className="overlay-pink">
          <MDBCardImage src={heroimage} alt="hero" fluid />
        </MDBCol>
      </MDBRow>
      <Description/>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.overlay-blue{
   background-image: url('${blueoverlay}');
   background-repeat: no-repeat;
   background-size: cover;

  h1 {
    font-weight: bolder;
    font-size: clamp(2rem,10vw,4rem);
    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white,
      -1px -1px white, 1px 1px white, -1px 1px white, 1px -1px white;
      
  }
  p {
    font-family: "Poppins", sans-serif;
    font-weight: 200;
    letter-spacing: 1px;
  }
  .glob{
    width: min(20vw,4rem);
  }
  .button{
    background-color: var(--textpink);
    transition: all 0.3s ease;

    :hover{
        a{
        color:var(--textpink);
    }
        background-color: white;
    }
  }
  .social{
    font-size: clamp(0.6rem,3vw,1.5rem);
      span{
       
        :hover{
            color:var(--textpink)
        }
      }
    }
  }

  .overlay-pink{
    background-image: url('${pinkoverlay}');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:"top left"
  }
`;
export default Hero;
