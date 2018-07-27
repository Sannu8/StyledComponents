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

const Password = styled.input.attrs({
  type: 'password',
  margin: props => props.size || '1em',
  padding: props => props.size || '2em'
}) `
  color: red;
  background: cyan;
  margin: ${props => props.margin};
  padding: ${props => props.padding};
`



const Button = styled.button`
  color: ${props => props.primary ? 'white' : 'magenta'}
  background: ${props => props.primary ? 'magenta' : 'white'}
  border-radius: 5%;
  height: 50px;
  font-size: 30px;
  margin: 10px;
`

const Link = ({ className, children }) => (
  <a href="#" className={className}>{children}</a>
)

const StyledLink = styled(Link) `
font-size: 40px;
`
const RedButton = Button.extend`
  background: red;
  color: white;
`

const DifferentLink = Button.withComponent('a');
const GreenLink = DifferentLink.extend`
  color: green;
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
          <br />
          <Input placeholder="FirstName" />
          <Input value="LastName" />
          <Password size="5em" />
          <Password />
        </Intro >
        <Button primary>Proceed to Payment</Button>
        <Button>Cancel</Button>
        <RedButton>Discard</RedButton>
        <br />
        <Link>Normal Link</Link>
        <StyledLink>Colorful Link</StyledLink>
        <br />
        <GreenLink>I am green and a link.</GreenLink>

      </AppWrapper >
    );
  }
}

export default App;
