import { MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <Wrapper className='my-5 py-5'>
       <MDBContainer>
        <h6>© Night Life. All Rights Reserved 2023. Licensing <br/>Templateby wCopilot.
Powered by Webflow</h6>
       </MDBContainer>
    </Wrapper>
  )
}

const Wrapper=styled.section`
    

`
export default Footer
