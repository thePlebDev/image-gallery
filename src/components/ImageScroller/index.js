import React from 'react';

import {axiosCall} from '../../utils'
import useApiGetCall from '../../Hooks/ApiCall'

import ImageScrollerInfo from '../ImageScrollerInfo'

const ImageScroller = ()=>{
  axiosCall()
  const {data,errors} = useApiGetCall(axiosCall)
  console.log(data)
  return(
    <div>
      {
        !data || errors
              ?
        <div>something went wrong </div>
              :
        data.map((item,index)=>{
          return <div key={item.id}>
              <ImageScrollerInfo url={item.urls.small} user={item.user} description={item.alt_description} />
          </div>
        })

        }

    </div>
  )
}
export default ImageScroller
