import styled from "styled-components";
import { useState } from "react";
const RoleDice = ({roleDice,currentDice}) => {
  
  
 
  return (
    <DiceContainer>
      <div onClick={() => roleDice(1, 7)} className="dice">
        <img src={`/Images/Dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on the Dice to Roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
  .p {
    font-size: 28px;
  }
  .dice {
    cursor: pointer;
  }
`;
