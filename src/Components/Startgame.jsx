import React from 'react'
import styled from 'styled-components'
import {Button} from '../styled/Button'
export default function Startgame({toggle}) {


  
  return (
    <Container>
      <div>
      <img src="/public/Images/Dice/1.png" alt="" />
      </div>
      
      <div className='Content'>
        <h1> 
          Dice Game
          <Button  onClick={toggle}>Play Now</Button>
        </h1>
      </div>
    </Container>
  )
}
const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height:100vh;
    align-items: center ;

.Content{
  h1{
    font-size: 96px;
  }
}

`
