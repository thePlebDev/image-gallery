import {useEffect,useState} from 'react'

const useApiGetCall = (requestCaller,extension)=>{
  const [data,setData] = useState('')
  const [errors,setErrors] = useState('')

  useEffect(()=>{
    requestCaller(extension)
    .then(doc=>setData(doc))
    .catch(err=>setErrors(err))

  },[requestCaller,extension])


  return{
    data,
    errors
  }
}

export default useApiGetCall
