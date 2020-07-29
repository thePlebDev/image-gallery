import React,{useState,useEffect} from 'react';

import useApiGetCall from '../../Hooks/ApiCall';
import {axiosCall} from '../../utils';


const Search = ({match:{params:{query}}})=>{
  // I need to make an api request with this info.
  const {data,errors}= useApiGetCall(axiosCall,'search/photos',query)
  const [stateData,setDataState] = useState('')
  console.log(data)

  useEffect(()=>{
    setDataState(data.results)
  },[data])

  return(
    <div>
      {
        !stateData || errors 
              ?
        <div>NOTHNIG HERE</div>
              :
        stateData.map((item,index)=>{
          return<div key={index}>hello</div>
        })
      }
    </div>
  )
}


export default Search
