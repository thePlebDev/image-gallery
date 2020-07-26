import axios from 'axios'

const axiosCall = async ()=>{
  let response = await axios.get('https://api.unsplash.com/photos/?client_id=')

    return(response.data)
}


export {axiosCall}
