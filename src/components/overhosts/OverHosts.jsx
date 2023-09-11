import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import styled from "styled-components";
import host1 from "../../assets/host1.jpg";
import host2 from "../../assets/host2.jpg";
import host3 from "../../assets/host 3.jpg";
import host4 from "../../assets/host 4.jpg";
const OverHosts = () => {
  return (
    <Wrapper className="mb-5">
      <MDBContainer fluid>
        <MDBRow className="g-5">
          <MDBCol size="12" sm="6" lg="3" className="image">
            <MDBCardImage src={host1} alt="host" fluid />
            <h5>wiz kalifa</h5>
            <p>Top 100 Dj's</p>
            <h6>FB-INST-TW</h6>
          </MDBCol>
          <MDBCol size="12" sm="6" lg="3" className="image">
            <MDBCardImage src={host2} alt="host" fluid />
            <h5>Etta Green</h5>
            <p>New york Dj</p>
            <h6>FB-INST-TW</h6>
          </MDBCol>
          <MDBCol size="12" sm="6" lg="3" className="image">
            <MDBCardImage src={host3} alt="host" fluid />
            <h5>Jenne wilson</h5>
            <p>Dancer</p>
            <h6>FB-INST-TW</h6>
          </MDBCol>
          <MDBCol size="12" sm="6" lg="3" className="image">
            <MDBCardImage src={host4} alt="host" fluid />
            <h5>Ronald Richards</h5>
            <p>Owner</p>
            <h6>FB-INST-TW</h6>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};
const Wrapper = styled.section`
img{
    border: 1px solid #b32bde;
    height: 350px;
   
}

.image{
  position: relative;
  
  :hover{
    h6{
      top: 50%;
      left: 50%;
      translate: -50% -50%;
     opacity: 1;
    }
    img{
      opacity: 0.5;
    }
  }
}
h6{
  position: absolute;
  top: 80%;
  left: 50%;
  translate: -50% -50%;
  transition: all 0.5s ease;
  opacity: 0;
}
h5{
  color:var(--textpink);
  font-weight: 400;
  font-family: poppins sans-serif;
  font-size: 1.5rem;
}

`;
export default OverHosts;
