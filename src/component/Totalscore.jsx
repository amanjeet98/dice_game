import React from 'react'
import { styled } from 'styled-components'

const Totalscore = ({score}) => {
  return (
   <Box>
    <h1>{score}</h1>
    <p>Total Score</p>
   </Box>  )
}

export default Totalscore

const Box = styled.div`
 h1{
  width: 3.875rem;
height: 7rem;
color: #000;
font-family: Poppins;
font-size: 6.25rem;
font-style: normal;
font-weight: 500;
line-height: normal;
padding-left: 2.5rem;
 }
 p{
  color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 500;
line-height: normal;
 }
`