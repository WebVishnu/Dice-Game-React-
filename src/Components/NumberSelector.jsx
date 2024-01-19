import React, { useState } from 'react'
import styled from 'styled-components'


export default function  ({setError,error,selectedNumber,setSelectedNumber}) {
    const arrayNumber = [1,2,3,4,5,6];

    const numberSelectorHandler = (value)=>{
      setSelectedNumber(value)
      setError("");
    }
    
  return (
    
    <NumberSelectorContainer>
      <p  className='error' >{error}</p>
        <div className='felx  '>
        {arrayNumber.map((value,i)=>(<Box isSelected={value ==selectedNumber} key={i} onClick={()=>numberSelectorHandler(value)} >{value}</Box>))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainer>
  );
};

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

.felx{
  gap: 24px;
  display: flex;

}
.p{
  font-size: 24px;
  font-weight: 700px;
}
.error{
  font-size: 25px;
  color: red;
  font-weight: 500;
}

`

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700px;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>!props.isSelected?"black":"white"};
`
