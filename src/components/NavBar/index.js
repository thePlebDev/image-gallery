import React from 'react';
import styled from 'styled-components';
import useForm from '../../Hooks/Form';
import {validate} from '../../utils';
import { useHistory } from 'react-router-dom';

const Input = styled.input`
  width:100%;
  padding-left:12px;
  padding-bottom:2px;
  height:35px;
  margin:20px auto;
  border-radius:20px;
  outline:none;
`
const Form = styled.form`
width: 80%;
margin:0 auto;
position:relative;
border-color: #d1d1d1;
`
const Container = styled.div`
 background-color:${props => props.theme.main};
 height:80px;

`
const Button = styled.button`
  background-color:white;
  height:35px;
  margin-left:20px;
  border:none;
  border-radius: 20px;
  position:absolute;
  top:24px;
  right:-13px;
  padding:5px 20px;
  font-size:15px;
  letter-spacing:1px;
  font-weight:600;
  text-transform:uppercase;
  outline:none;
`

const NavBar =()=>{
const {handleChange,handleSubmit,searchState,errors} = useForm(validate,useHistory)
  return(
    <Container>
      <Form onSubmit={(e)=>handleSubmit(e)} >
        <label>
          <Input type='text'
          name='search'
          value={searchState.value}
          onChange={(e)=>handleChange(e)}/>
        </label>
        <Button type='Submit'>Submit</Button>
      </Form>

      {
        errors? <div>{errors.value}</div> : <div>Nothing here</div>
      }
    </Container>
  )
}

export default NavBar
