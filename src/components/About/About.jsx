import {
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import React, { useState } from "react";
import styled from "styled-components";
import disco from "../../assets/disco.jpg";
import overlaypink from "../../assets/aboutoverlaypink.png";
import dots from "../../assets/aboutpagedots.png";
import {  useNavigate } from "react-router-dom";
const About = () => {
  const navigate=useNavigate()
  const [video, setVideo] = useState(false);
  const [close, setClose] = useState(false);
  const [countup,setCountUp]=useState(false)
  return (
    <Wrapper id="about">
      <MDBContainer fluid className={video && "container"}>
        <MDBRow className="mb-5 align-items-center">
          {/* content */}
          <MDBCol className="text-start" size="12" md="6">
            <h3>About Last Night</h3>
            <MDBTypography>
              Last we had a beautiful night party. we enjoyed a lot with misic
              and the sound system is awesome which makes every one to move from
              ther places. This is the best place where we can get hangout with
              friends and have a blast
            </MDBTypography>
            <ScrollTrigger onEnter={()=>setCountUp(true)} onExit={()=>setCountUp(false)}>
            <section className="d-flex justify-content-start gap-5">
              <div className="d-flex flex-column align-items-center">
                <strong className="fs-2" style={{ color: "var(--textpink)" }}>
              {countup&&  <CountUp start={0} end={40} duration={1.5} delay={0}></CountUp>}+
                </strong>
                <p className="ls-wider">Music artists</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <strong className="fs-2" style={{ color: "var(--textpink)" }}>
              {countup &&  <CountUp start={0}  end={150} duration={1.5} delay={0}></CountUp>}+
                </strong>
                <p className="ls-wider">Songs</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <strong className="fs-2" style={{ color: "var(--textpink)" }}>
               {countup && <CountUp start={0} end={500} duration={1.5} delay={0}></CountUp>}+
                </strong>
                <p className="ls-wider">Places</p>
              </div>
            </section>
            </ScrollTrigger>
          </MDBCol>
          {/* video */}
          <MDBCol size="12" md="6" className="video">
            <MDBCardImage
              src={disco}
              alt="disco"
              fluid
              style={{ width: "min(80vw,450px)" }}
            />
            <MDBIcon
              far
              icon="play-circle"
              className="icon"
              onClick={() => {
                setVideo(true);
                setClose(true);
              }}
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <section className={video ? "show" : "frame"} style={{zIndex:'99'}}>
        <MDBIcon
          far
          icon="times-circle"
          className={close ? "unclose" : "close"}
          onClick={() => {
            setVideo(false);
            setClose(false);
            navigate(-1)
          }}
        />
        <iframe
          width="100%"
          height="450"
          src="https://www.youtube.com/embed/Rf9flQISwok"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          duration="1000"
        ></iframe>
      </section>
      
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    opacity: 0.2;
  }
  position: relative;
  .unclose {
    z-index: 5;
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 2rem;
  }
  .close {
    display: none;
  }
  .frame {
    display: none;
  }
  .show {
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    display: block;
    width: min(90vw, 900px);
  }
  .video {
    background-image: url('${dots}');
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: auto;
    :active {
      .frame {
        display: block;
      }
    }
    position: relative;
    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: -50% -50%;
      font-size: 4rem;
      :hover {
        scale: 1.2;
      }
    }
  }
`;
export default About;
