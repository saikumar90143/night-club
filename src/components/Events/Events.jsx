import React, { useState } from "react";
import styled from "styled-components";
import overlayleft from "../../assets/eventoverlayleft.png";
import overlayright from "../../assets/eventoverlayright.png";
import events1 from "../../assets/event1.jpg";
import events2 from "../../assets/event2.jpg";
import events3 from "../../assets/event3.jpg";
import {
  MDBBtn,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
const Events = () => {
  const [event1, setEvent1] = useState(true);
  const [event2, setEvent2] = useState(false);

  return (
    <Wrapper className="mb-5" id="event">
      <section className="mb-5">
        <h6>DATES FOR OUR</h6>
        <h4>Upcoming Parties</h4>
        <p>
          View our event calendar to see upcoming events. Purchase tickets, VIP
          Bar Cards, or reserve VIP tables with bottle service.
        </p>
        <MDBRow className="days g-4">
          <MDBCol size="12" md="4">
            <MDBBtn
              className="btn"
              
              onClick={() => {
                setEvent1(true);
                setEvent2(false);
              }}
            >
              Friday
            </MDBBtn>
          </MDBCol>
          <MDBCol size="12" md="4">
            <MDBBtn
              className="btn"
              onClick={() => {
                setEvent1(false);
                setEvent2(true);
              }}
            >
              Saturday
            </MDBBtn>
          </MDBCol>
          <MDBCol size="12" md="4">
            <MDBBtn
              className="btn"
              onClick={() => {
                setEvent1(false);
                setEvent2(false);
              }}
            >
              Sunday
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </section>
      <section>
        {event1 ? (
          <>
            <section className="position-relative">
              <MDBCardImage src={events1} fluid />
              <div className="text-start info">
                <MDBTypography tag="h4" className="fw-bolder">
                  Brainwash
                </MDBTypography>
                <p>08 december / doors open at 23:00</p>
                <br />

                <p className="w-responsive">
                  Brainwash is a weekly party in Amsterdam's DJO nightclub. Join
                  in the fun every Saturday night for raucous blasts of electro,
                  EDM and urban tunes from a variety of DJs.
                </p>
                <strong>$ 55</strong>
                <br />
                <br />
                <a href="#" className="text-decoration-underline">
                  Get Tickets
                </a>
              </div>
            </section>
          </>
        ) : event2 ? (
          <>
            <section className="position-relative">
              <MDBCardImage src={events2} fluid />
              <div className="text-start info">
                <MDBTypography tag="h4" className="fw-bolder">
                  Encore
                </MDBTypography>
                <p>15 december / doors open at 23:00</p>
                <br />

                <p className="w-responsive">
                  What to expect? Everything from old-school tracks to the
                  newest beats around! Expect to hear Biggie, Beyonce, J Dilla,
                  D'Angelo, Outkast, TLC, Brandy, Dr Dre, Snoop Dogg, Destiny's
                  Child, Aaliyah, Jill Scott, Erykah Badu, Mary J Blige, The
                  Pharcyde, The Roots, DJ Premier, Pete Rock, Lauryn Hill,
                  Wu-Tang Clan, Donell Jones, Mos Def and many more.
                </p>
                <strong>$ 45</strong>
                <br />
                <br />
                <a href="#" className="text-decoration-underline">
                  Get Tickets
                </a>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="position-relative event">
              <MDBCardImage src={events3} fluid />
              <div className="text-start info">
                <MDBTypography tag="h4">
                  Skillet at DJO Night Club
                </MDBTypography>
                <p>22 december / doors open at 23:00</p>
                <br />

                <p className="w-responsive">
                  Legends of American Hard Rock – Skillet Music for the first
                  time with a solo concert in Lviv!On November 19th at Malevich
                  Night Club, rockers will be presenting a new record as part of
                  the Victorious Tour, and it will be something incredible!
                </p>
                <strong>$ 40</strong>
                <br />
                <br />
                <a href="#" className="text-decoration-underline">
                  Get Tickets
                </a>
              </div>
            </section>
          </>
        )}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`

  .days {
    .btn {
      background-color: transparent;

      padding: 0.8rem 1.7rem;
      font-size: 1.3rem;
      font-weight: 600;
      width: 100%;
      :focus-within {
        border: 1px solid white;
        border-radius: 1rem;
      }
    }
  }

  height: fit-content;
  img {
    
    height: 700px;
  }
  .info {
    position: absolute;
    top: 10%;
    left: 10%;
  }
`;
export default Events;
