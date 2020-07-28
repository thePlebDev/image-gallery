import {useState,useEffect} from 'react';
import { Redirect } from 'react-router-dom';

const useForm = (validate,apiCall)=>{
  const [searchState,setSearchState] = useState({search:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault()
    setErrors(validate(searchState.search))
    setIsSubmitting(true)
  }

  const handleChange=(e)=>{
    setSearchState({[e.target.name]:e.target.value})
  }

  useEffect(()=>{
      if(Object.keys(errors).length === 0 && isSubmitting){
          
      }
  },[errors,isSubmitting])


  return{
    searchState,
    handleChange,
    handleSubmit,
    errors
  }
}

export default useForm
