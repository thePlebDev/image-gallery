import React,{useEffect,useState} from 'react'
import styled from 'styled-components';


import ImageScrollerModal from '../ImageScrollerModal';

const Container = styled.div`
  position:relative
`

const ImageScrollerInfo =({url,user,description,loading,setLoading})=>{
  const[modalState,setModalState] = useState(false)

  // this was used for loading animations.
  useEffect(()=>{
    setLoading(true)
  },[setLoading])

  return(
    <Container onMouseEnter={()=>{setModalState(true)}} onMouseLeave={()=>{setModalState(false)}}>
        <div >
          <ImageScrollerModal username={user.username} modalState={modalState}/>
        </div>
        <div>
          <img src={`${url}`} alt={description}/>
        </div>

    </Container>
  )
}


export default ImageScrollerInfo
