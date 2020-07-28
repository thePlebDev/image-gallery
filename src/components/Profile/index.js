import React,{useState,useEffect} from 'react';
import useApiGetCall from '../../Hooks/ApiCall';
import {axiosCall} from '../../utils'
import styled from 'styled-components';

import PortfolioImage from '../PortfolioImages'


const Image = styled.img`
  width:128px;
  border-radius:50%;
  margin:20px;
  box-shadow:0px 0px 5px rgba(0,0,0,0.2);

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

const ImageGrid = styled.div`
 display: grid;
 grid-template-columns: auto auto;
 justify-content:center;
 align-items:center;
 grid-column-gap:30px;
 grid-row-gap:30px;
`
const Divider = styled.div`
  border: 1px solid #F64C72;
  margin:20px;

`;

const Profile =({match:{params:{username}}})=>{
  const [profilePic,setProfilePic] = useState('');
  const [mediumProfilePic,setMediumProfilePic] = useState('');
  const [name,setName] = useState('')
  const [bio,setBio] = useState('');
  const [photos,setPhotos] = useState('')
  const {data,errors} =useApiGetCall(axiosCall,`users/${username}`)
  console.log(data)
  useEffect(()=>{
    if(data){
      setPhotos(data.photos)
      setProfilePic(data.profile_image.large)
      setBio(data.bio)
      setName(data.name)
      setMediumProfilePic(data.profile_image.medium)
    }
  },[data])

  return(
    <div>
      {
        !photos || errors
              ?
        <div>something went wrong</div>
              :
        <div>
          <div>

            <Image src={profilePic} alt='profile'/>
            <Username>{username} | {name}</Username>
            <Bio>{bio}</Bio>
            <Divider/>
            <ImageGrid>
              {
                photos.map((item,index)=>{
                  return  <PortfolioImage src={item.urls.thumb} key={item.id}
                          alt='from portfolio'
                          profilePic={mediumProfilePic}/>
                })
              }
            </ImageGrid>
            <Divider/>
          </div>
        </div>
    }
    </div>
  )
}

export default Profile
