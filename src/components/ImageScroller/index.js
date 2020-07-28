import React,{useState} from 'react';
import styled from 'styled-components'

import {axiosCall} from '../../utils'
import useApiGetCall from '../../Hooks/ApiCall'

import ImageScrollerInfo from '../ImageScrollerInfo'

const Grid = styled.div`
display:grid;
grid-template-columns: 1fr auto 1fr;
`
const GridItem =styled.div`
grid-column-start:2;
grid-column-end:3;
`

const ImageScroller = ()=>{
  const {data,errors} = useApiGetCall(axiosCall,'photos')
  const [loading,setLoading] = useState(false)
  return(
    <Grid>
      {
        !data || errors
              ?
        <div>something went wrong </div>
              :
        data.map((item,index)=>{
          return <GridItem key={item.id}>
              <ImageScrollerInfo
              url={item.urls.small}
              user={item.user}
              description={item.alt_description}
              loading={loading}
              setLoading={setLoading}/>
          </GridItem>
        })

        }

    </Grid>
  )
}
export default ImageScroller
