import React from 'react'
import styled from 'styled-components';
import {useSpring, animated} from 'react-spring';
import {Link} from 'react-router-dom';

const Container = styled.div`
  position:absolute;
  opacity:0.8;
  width:100%;
  bottom:4px;
  display:flex;
  justify-content: space-around;
  align-items:center;
  background-color:white;
`

const Button = styled.div`
  color:${props=>props.theme.main};
  border: 1px solid #242582;
  height: 30px;
  marign:10px 0;
  padding-top: 10px;
  padding-left:20px;
  padding-right:20px;
  align-text:center;
  border-radius:4px;
  font-size:1.1em;
  letter-spacing:1px;
  cursor:pointer;
`
const Text = styled.h1`
  color:${props=>props.theme.main};
  font-size:1.1em;
  text-transform:uppercase;
`


const ImageScrollerModal = ({username,modalState})=>{
  const props = useSpring({opacity:modalState?  1:0})

  return(
    <animated.div style={props}>
      <Container >
        <Text>{username}</Text>
        <Link to={`profile/${username}`}>
          <Button>View Profile</Button>
        </Link>
      </Container>
    </animated.div>
  )
}

export default ImageScrollerModal
