import styled from "styled-components";

export const Button = styled.button`
font-size: 16px;
 Display: flex;
 flex-direction :column ;
 justify-content: center;
 align-items: center;
 color: white;
 padding: 10px 18px;
 gap: 10px;
 min-width: 220px;
 border:none;

 width: 220px;
 height: 44px;

 background-color: black;
 border-radius: 5px;
 transition: 0.4s background ease-in;
 cursor: pointer;


 &:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
 }

`