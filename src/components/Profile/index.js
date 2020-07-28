import React,{useState,useEffect} from 'react';
import useApiGetCall from '../../Hooks/ApiCall';
import {axiosCall} from '../../utils'
import styled from 'styled-components';



const Image = styled.img`
  width:128px;
  border-radius:50%;
  background-color:red;
  margin:20px;
  broder: 1px solid red;
`
const Username = styled.div`
  font-weight:700;
  font-size:1.4em;
  letter-spacing:2px;
  margin-left:20px;
  padding:5px;
  color:${props=>props.theme.main};
`

const Bio = styled.div`
  margin-left:20px;
  padding:5px;
  font-size:15px;
  letter-spacing:1px
  color:${props=>props.theme.main};
`




const Profile =({match:{params:{username}}})=>{
  const [profilePic,setProfilePic] = useState('');
  const [name,setName] = useState('')
  const [bio,setBio] = useState('');
  const [photos,setPhotos] = useState('')
  const {data,errors} =useApiGetCall(axiosCall,`users/${username}`)

  useEffect(()=>{
    if(data){
      setProfilePic(data.profile_image.large)
      setBio(data.bio)
      setName(data.name)
      setPhotos(data.photos)
    }
  },[data])

  return(
    <div>
      {
        !data || errors
              ?
        <div>something went wrong</div>
              :
        <div>
          <div>
            <Image src={profilePic} alt='profile'/>
            <Username>{username} | {name}</Username>
            <Bio>{bio}</Bio>
          </div>
        </div>
    }
    </div>
  )
}

export default Profile
