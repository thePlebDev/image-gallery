import {useEffect,useState} from 'react'

const useApiGetCall = (requestCaller)=>{
  const [data,setData] = useState('')
  const [errors,setErrors] = useState('')

  useEffect(()=>{
    requestCaller()
    .then(doc=>setData(doc))
    .catch(err=>setErrors(err))

  },[])


  return{
    data,
    errors
  }
}

export default useApiGetCall
