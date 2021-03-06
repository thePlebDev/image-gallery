import axios from 'axios';

const axiosCall = async (extension,query)=>{

  let response = await axios.get(`https://api.unsplash.com/${extension}/?client_id=&query=${query}`)

    return(response.data)
}

const validate =(value)=>{
  console.log(value)
  let errors ={}
  if(!value){
    errors.value = 'Please enter a value'
  }
  return errors
}



export {axiosCall,validate}
