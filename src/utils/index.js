import axios from 'axios'

const axiosCall = async (extension)=>{

  let response = await axios.get(`https://api.unsplash.com/${extension}/?client_id=`)

    return(response.data)
}


export {axiosCall}
