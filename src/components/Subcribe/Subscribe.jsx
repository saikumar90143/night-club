import { MDBBtn, MDBContainer, MDBInput, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit'
import React, { useRef } from 'react'
import styled from 'styled-components'

const Subscribe = () => {
    const emailRef=useRef(null)
    const handleSubmit=()=>{
       if(emailRef.current>4){
        alert("thanks for subscribe")
       }
    }
  return (
    <Wrapper className='my-5 py-3'>
      <MDBContainer className='d-flex flex-column gap-5' fluid>
        <h5 style={{color:"var(--textpink)"}} className='text-center text-uppercase'>Stay Updated</h5>
        <h3 className='text-center fw-bolder text-capitalize'>SUbscribe to news Letter</h3>
        <MDBValidation noValidate className='d-flex justify-content-center flex-row gap-2'>
            <MDBValidationItem>
             <MDBInput type='email' label='Email address' required ref={emailRef}/>

            </MDBValidationItem>
            <MDBBtn type='submit' style={{backgroundColor:"var(--textpink)",height:"40px"}} onClick={handleSubmit}>Submit</MDBBtn>
        </MDBValidation>
      </MDBContainer>
    </Wrapper>
  )
}
const Wrapper=styled.section`
width: 100%;
    background-color: #171616;
`
export default Subscribe
