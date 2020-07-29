import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  justify-self:center;
  box-shadow:0px 2px 8px rgba(0,0,0,0.8);
  margin: 10px;
  padding:10px;
`
const Box = styled.div`
  display:flex;
  align-items: center;
`
const Image = styled.img`
 border-radius: 50%
`



const SearchImages = ({picture,username,userPic,alt})=>{

  return(
    <Container>
          <Link to={`profile/${username}`}>
          <Box>
            <Image src={userPic} alt='profile' style={{borderRadius:'50%'}} />
            <h3 style={{marginLeft:'5px'}}>{username}</h3>
          </Box>
          <img src={picture} alt={alt} />
        </Link>
    </Container>
  )
}

export default SearchImages
