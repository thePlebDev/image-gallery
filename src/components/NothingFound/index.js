import React from 'react';


const NoneFound = ({query})=>{
console.log(query)
  return(
    <div>
        <h3 style={{color:'black',textAlign:'center', fontSize:'50px', opacity:'0.6'}}>{query} not found</h3>

    </div>
  )
}

export default NoneFound
