import { MDBCol, MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";

const WhatWeDo = () => {
  const whatWeDo = [
    {
      id: 1,
      title: "Corporate Events",
      desc: " Creativity corporate events from concept and design, right through to production and managenent of the event itself.",
    },
    {
      id: 2,
      title: "Branded Events",
      desc: "We offer the best landing and gardening guarantee in hate our  branded events provide unmatched opportunities for you to  interact with costumer make the brand even stronger and  recognizable.. ",
    },
    {
      id: 3,
      title: "Comercial Events",
      desc: "We provide productions services for commercials, branded   media, films/Tv or documentary shoots in many pavilions. ",
    },
    {
      id: 4,
      title: "HEN Events",
      desc: "Create hen party memories that will last a lifetime with our the hen party specialists.",
    },
    {
      id: 5,
      title: "Birthday Parties",
      desc: "Our birthday party services include live DJ,s dancing, bottleservice and much more. ",
    },
    {
      id: 6,
      title: "VIP Service",
      desc: "From individual club VIP packages and bottle services to  closed exclusive parties.",
    },
  ];
  return (
    <Wrapper>
      <MDBContainer fluid>
        <MDBTypography tag="h3" className="my-5">
          What We Do
        </MDBTypography>
        <MDBRow className="">
          {whatWeDo.map((service) => {
            return (
              <MDBCol size="12" sm="6" lg="4" key={service.id}>
                <section className="d-flex justify-content-between gap-4">
                  <div className="number">{service.id}</div>
                  <div className="text-start d-flex flex-column justify-content-between gap-4">
                    <h4 className="fw-800">{service.title}</h4>
                    <p>{service.desc}</p>
                  </div>
                </section>
              </MDBCol>
            );
          })}
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .number {
    background-color: white;
    border-radius: 50%;
    color: var(--textpink);
    font-weight: bolder;
    font-size: 1.7rem;
    text-align: center;
    min-width: 50px;
    height: 50px;
  }
`;
export default WhatWeDo;
