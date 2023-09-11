import { MDBCardImage, MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React, { useState } from "react";
import styled from "styled-components";
import gallery1 from '../../assets/gallery.1.jpg'
import gallery2 from "../../assets/gallery2.jpg";
import gallery3 from "../../assets/gallery3.jpg";
import gallery4 from "../../assets/gallery4.jpg";
import gallery5 from "../../assets/gallery5.jpg";
import gallery6 from "../../assets/gallery6.jpg";
const Gallery = () => {
  const [image,setImage]=useState('')
  const [show,setShow]=useState(false)
  console.log('image: ', image);
  const gallery = [
    { id: 1, image: gallery1, title: "MATRIN GARRIX" },
    { id: 2, image: gallery2, title: "Monolink" },
    { id: 3, image: gallery3, title: "KSHMR" },
    { id: 4, image: gallery4, title: "AVAION" },
    { id: 5, image: gallery5, title: "ZHU" },
    { id: 6, image: gallery6, title: "LANE 8" },
  ];

 
  return (
    <Wrapper className="my-5" id="gallery">
      <MDBContainer fluid>
        <MDBRow>
          {gallery.map((pic) => {
            return (
              <MDBCol size="12" md="4" key={pic.id} className='text-start g-4'>
                <MDBCardImage src={pic.image} fluid onClick={(e)=>{setImage(e.target.src), setShow(true)}}/>
                <h5>{pic.title}</h5>
              </MDBCol>
            );
          })}
        </MDBRow>

        <section className={show?"show":"slider-menu"}>
          <MDBCardImage src={image} fluid/>
          <MDBIcon icon="times circle" fas className="cross" onClick={()=>setShow(false)}/>
        </section>
      </MDBContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
.show{
  position: fixed;
  top: 0;
  left: 0;
  bottom:0;
  right:0;
  img{
    width: 90vw;
    background-size: cover;
    object-fit: fill;
    height: 95vh;
    
  }
  .cross{
    position: absolute;
    top: 0;
    right: 2rem;
    font-size: 2rem;
  }
}
.slider-menu{
  display: none;
}
`;
export default Gallery;
