import {useEffect,useState} from 'react'

const useApiGetCall = (requestCaller,extension,query)=>{
  const [data,setData] = useState('')
  const [errors,setErrors] = useState('')

  useEffect(()=>{
    requestCaller(extension,query)
    .then(doc=>setData(doc))
    .catch(err=>setErrors(err))

  },[requestCaller,extension,query])


  return{
    data,
    errors
  }
}

export default useApiGetCall
