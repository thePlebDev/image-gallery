import {useState,useEffect} from 'react';
import {useHistory } from 'react-router-dom';

const useForm = (validate)=>{
  const [searchState,setSearchState] = useState({search:''})
  const [errors,setErrors] = useState({})
  const [isSubmitting,setIsSubmitting] = useState(false)
  let history = useHistory()

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
        history.push(`/search/${searchState.search}`)
        setIsSubmitting(false)
      }

  },[errors,isSubmitting,searchState.search,history])


  return{
    searchState,
    handleChange,
    handleSubmit,
    errors
  }
}

export default useForm
