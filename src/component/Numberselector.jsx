import React, { useState } from 'react'
import { styled } from 'styled-components'

const Numberselector = ({selectedNumber , setSelectedNumber,setError , error}) => {

 const arrNumber = [1,2,3,4,5,6 ];

 const numberSelectorHandler = (value) => {
  setSelectedNumber(value);
  setError("")
 }
 

  return (
   <Maindiv>
      <span>{error}</span>
     <Main>
     
     
      {
       arrNumber.map((value,i)=><Box 
       isSelected = {value === selectedNumber} 
       key={i} 
       onClick={() => numberSelectorHandler(value)} >
        {value}
        </Box> )
      }
     
     </Main>
    <p>Select Number</p>
     </Maindiv>
     
     
    
  )
}

export default Numberselector


const Maindiv = styled.div`

span{
  color: #FF0C0C;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 400;
line-height: normal;
padding-left: 10rem;
}
 p{
  color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
margin-top: 1.88rem;
padding-left: 25rem;
 }
`

const Main = styled.div`
display: flex;
gap: 1.875rem;
`

const Box = styled.div`
 display: flex;
width: 4.5rem;
height: 4.5rem;
padding: 1.125rem 0rem;
justify-content: center;
align-items: center;
border: 1px solid #000;
background: #FFF;
color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
background-color: ${(props) => (props.isSelected ? "black" : "white")};
color:${(props) => (props.isSelected ? "white" : "black")};

`