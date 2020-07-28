import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  box-shadow: 0px 2px 8px rgba(0,0,0,0.8);
  border-radius:5px;
  display:flex;
  flex-direction:column;
`;

const PortfolioImage = ({src,alt})=>{

  return(
    <Container >
      <img src={src}alt={alt} style={{margin:0 ,padding:'5px',borderRadius:'4px'}} />
    </Container>
  )
}


export default PortfolioImage
