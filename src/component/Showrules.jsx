import React from 'react'
import { styled } from 'styled-components'

const Showrules = () => {
  return (
   <Showruls>
   <div className='show-rules' >
   <div className='hyper2' >
   <h2>How to play dice game</h2>
   </div>
     <div className='hyper3' >Select any number</div>
     <div className="hyper4">Click on dice image</div>
     <div className="hyper4">after click on  dice  if selected number is equal to dice number you will get same point as dice</div>
     <div className="hyper4">if you get wrong guess then  2 point will be dedcuted</div>
   </div>
   </Showruls>
  )
}

export default Showrules
const Showruls = styled.div`
 .show-rules{
padding: 1.25rem;
gap: 1.5rem;
background: #FBF1F1;
width: 45vw;
margin-top: 4rem;
margin-left: 25vw;
 }
 .show-rules h2{
  color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
 }
 
.hyper2{
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.hyper3{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1.5rem;
  color: #000;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal;
}
.hyper4{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #000;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 500;
line-height: normal; 
}
`