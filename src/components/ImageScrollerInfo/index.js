import React,{useEffect,useState} from 'react'
import {useSpring, animated} from 'react-spring';

const ImageScrollerInfo =({url,user,description})=>{
  const [state,setState] = useState(false)



  const handleClick=()=>{
    setState(!state)
  }

  return(
    <div style={{display:'flex',justifyContent:'center',margin:'15px'}}>
      <div className='image-container'>
        <img src={`${url}`} alt={description} onClick={()=>handleClick()}/>
      </div>

    </div>
  )
}


export default ImageScrollerInfo
