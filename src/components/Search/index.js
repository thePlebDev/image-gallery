import React,{useState,useEffect} from 'react';
import styled from 'styled-components';

import useApiGetCall from '../../Hooks/ApiCall';
import {axiosCall} from '../../utils';
import SearchImages from '../SearchImages'
import NoneFound from '../NothingFound'

const Grid = styled.div`
display:grid;
`


const Search = ({match:{params:{query}}})=>{
  // I need to make an api request with this info.
  const {data,errors}= useApiGetCall(axiosCall,'search/photos',query)
  const [stateData,setDataState] = useState('')
  console.log(stateData)

  useEffect(()=>{
    setDataState(data.results)
  },[data])
  
  if( stateData && Object.keys(stateData).length ===0){
    return <NoneFound query={query}/>
  }
  return(
    <Grid>
      {

        !stateData || errors
              ?
          <h2>Nothing here</h2>
              :
        stateData.map((item,index)=>{
          return <SearchImages key={item.id} picture={item.urls.small}
                  username={item.user.username} userPic={item.user.profile_image.small} alt={item.alt_description} />
        })
      }
    </Grid>
  )
}


export default Search
