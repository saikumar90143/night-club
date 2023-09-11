import {
  MDBBtn,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBInputGroup,
  MDBRow,
  MDBTextArea,
  MDBValidation,
  MDBValidationItem,
} from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import leftOverlay from "../../assets/leftcontact.png";
import rightOverlay from "../../assets/rightcontactoverlay.png";
const Contact = () => {
  return (
    <Wrapper id="reservation">
      <MDBContainer >
        <MDBRow className="g-5">
          <h3 className="text-start">Want To Reserve ?</h3>
          {/* reserve */}
          <MDBCol size="12" lg="6">
            <MDBValidation noValidate>
              <MDBInputGroup className="d-flex justify-content-between align-items-start">
                <MDBValidationItem>
                  <MDBInput
                    type="text"
                    label="Name"
                    placeholder="Name"
                    required
                    contrast
                    className="mb-4"
                  />
                </MDBValidationItem>
                <MDBValidationItem>
                  <MDBInput
                    type="number"
                    label="phone number"
                    className="phone mb-4"
                    inputMode="numeric"
                    min="0"
                    pattern="\d*"
                    placeholder="Phone Number"
                    maxLength={10}
                    required
                    contrast
                  />
                </MDBValidationItem>
              </MDBInputGroup>
              <MDBInputGroup className="d-flex justify-content-between">
                <MDBValidationItem>
                  <MDBInput
                    type="email"
                    label="Email"
                    placeholder="Email*"
                    required
                    contrast
                    className="mb-4"
                  />
                </MDBValidationItem>
                <MDBValidationItem>
                  <MDBInput
                    type="number"
                    label="members"
                    min="1"
                    placeholder="members"
                    required
                    contrast
                    className="mb-4"
                  />
                </MDBValidationItem>
              </MDBInputGroup>
              <MDBInputGroup>
                <MDBTextArea
                  label="message"
                  placeholder="message"
                ></MDBTextArea>
              </MDBInputGroup>
              <MDBBtn type="submit" className="float-start mt-4">
                {" "}
                Submit
              </MDBBtn>
            </MDBValidation>
          </MDBCol>

          {/* contact */}
          <MDBCol size="12" lg="6" className="text-start">
            <h6>Questions ?</h6>
            <h3>Contact us </h3>
            <p>
              Fill out the form to attend the most anticipated events in the
              city and get your tickets for the best night party today for you
              and your friends.
            </p>
            <p style={{ color: "var(--textpink)" }}>
              169 Water Street, New York, 11226 United States.
            </p>
            <b style={{ color: "var(--textpink)" }}>9014386620</b>
            <p style={{ color: "var(--textpink)" }}>
              saikumar.dudala@gmail.com
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  input {
    color: white;
    margin-bottom: 2rem;

    :placeholder-shown {
      color: white;
    }
  }
  textarea {
    resize: none;
  }
  .phone {
    -moz-appearance: textfield;
  }
  .btn {
    background-color: var(--textpink);
    width: min(200px, 80vw);
  }
`;
export default Contact;
