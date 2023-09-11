import { MDBCardImage, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import blog1 from "../../assets/blog1.jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      title: "London Wide Awake Feastival",
      desc: "But the team has been super welcoming and I couldn’t be happier with my decision to join.",
      date: "September 2, 2022 in World",
    },
    {
        id: 2,
        image: blog2,
        title: "New Amy Winehouse Exhibition",
        desc: "A new exhibition focused on Amy Winehouse is set to open next month, it has been announced. …",
        date: "August 30, 2022 in World",
      },
      {
        id: 3,
        image: blog3,
        title: "Ed sheeran confirms Wedding Date",
        desc: "Ed Sheeran has released a new music video which sees him seemingly confirming when he married …",
        date: "november 5, 2023 in World",
      },
  ];
  return (
    <Wrapper className="my-5" id="news">
      <MDBContainer fluid>
        <h5 className="text-start" style={{ color: "var(--textpink)" }}>
          BLOG
        </h5>
         <h4 className="pb-4">Read The Latest News</h4>
       <div className="d-flex justify-content-end">

        <NavLink to='/blogsection'className='text-end fs-5 text-decoration-underline' style={{color:"var(--textpink)"}}>All News</NavLink>
       </div>
        
        <MDBRow>
           {blogs.map((blog)=>{
            return(
                <MDBCol size='12' md='4' key={blog?.id} className='text-start'>
                 <div>
                     <MDBCardImage src={blog?.image} fluid/>
                 </div>
                 <h5 className="fw-bolder">{blog?.title}</h5>
                 <p>{blog?.desc}</p>
                 <b style={{color:"var(--textpink)"}}>{blog?.date}</b>
                </MDBCol>

            )
           })}
        </MDBRow>
      </MDBContainer>
    </Wrapper>
  );
};
const Wrapper = styled.section``;
export default BlogSection;
