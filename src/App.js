import React, { Component } from 'react';
import logo from './logo.svg';


import styled, { keyframes } from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
  background-color: coral;
`

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`

const Logo = styled.img`
  animation: ${rotate} infinite 20s linear;
  height: 80px;
  &:hover {
    animation: ${rotate} infinite 1.5s linear;
  }
`

const Title = styled.h1`
  font-size: 1.5em;
`

const Intro = styled.p`
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`

const Input = styled.input`
  color: red;
  background: cyan;
`

const Button = styled.button`
  color: ${props => props.primary ? 'white' : 'magenta'}
  background: ${props => props.primary ? 'magenta' : 'white'}
`

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header>
          <Logo src={logo} alt="logo" />
          <Title>Welcome to React</Title>
        </Header>
        <Intro>
          Bootstrapped with <code>create-react-app</code>.
          <Input placeholder="FirstName"></Input>
          <Input value="LastName"></Input>
        </Intro>
        <Button primary>Proceed to Payment</Button>
        <Button>Cancel</Button>
      </AppWrapper>
    );
  }
}

export default App;
