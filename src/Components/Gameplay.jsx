import React from "react";
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import styled from "styled-components";
import { useState } from "react";
import { Button } from "../styled/Button";
import './button.css';
import Rules from "./Rules";

export default function Gameplay() {
  const [score,setScore] = useState(0);
  const [selectedNumber,setSelectedNumber] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules,setShowRules] = useState(false);


  const resetScore = ()=>{
    setScore(0);
  }

  const roleDice = () => {
    if(!selectedNumber) {
      setError(" You must select a number first!");
      return;
    }

    const randomeNumber = generateRandomNumber(1, 7);

    setCurrentDice((prev) => randomeNumber);


    if(selectedNumber === randomeNumber){
      setScore((prev)=> prev + randomeNumber);
    }
    else{
      setScore((prev)=> prev - 2);
    }
  
    setSelectedNumber(undefined);
  
  };
  const generateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };


  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} ></TotalScore>
        <NumberSelector setError={setError} error={error} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} ></NumberSelector>
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className="btns">
        <button onClick={resetScore} className="hoverer" >Reset</button>
        <button onClick={ ()=> setShowRules(prev => !prev)} className="sus">{

          showRules ? "Hide" : "Show"
        } Rules</button>
      </div>

      {showRules && <Rules/>}
    </MainContainer>
  );
}
const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
