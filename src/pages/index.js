import React from 'react'
import Link from 'gatsby-link'

//Standard Components
import styled from 'styled-components'
import Icons from "../components/Icons"
import LogoIcon from "../components/LogoIcon"
import FooterData from "../components/FooterData"
import HeaderWraps from "../components/HeaderWraps"

//Layout Components
import GridWrap from "../components/Layout/GridWrap"
import Block from "../components/Layout/Block"

//static assets
import Hero from '../img/hero.jpeg'
import Gd from '../img/gd.jpeg'
import Gear from '../img/gear.jpeg'


const Headline = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  justify-self: center;
  align-self: center;
  color: #eee ;
`
const StyledH2 = styled.h2`
  line-height: 3rem;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  color: #fff;
  text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
`

const Index = ({ transition }) => (
  <div style={transition && transition.style}>
  <GridWrap>
      <Block padding="2rem" display="flex" flow="column" justify="center" img={Hero} area='one'>
      <h1>Welcome to GRIDVIEW</h1>
      <h3>Let's make something together.</h3>
    </Block>
      <Block img={Gd} area='two'>
        <HeaderWraps>
          <StyledH2>Design from beginning to end.</StyledH2>
        </HeaderWraps>
    </Block>
      <Block img={Gear} area='three'>
        <HeaderWraps>
          <StyledH2>Quality Photography for any occasion.</StyledH2>
        </HeaderWraps>
    </Block>
      <Icons />
      <Block height="auto" color="#222" area='footer' display="flex" align="center">
        <LogoIcon />
        <FooterData>
          <p>
          ©2017 GRIDVIEW Design &amp; Photography<br/>
          Home | About | Design | Photography | Contact<br/>
          Terms &amp; Conditions | FAQ
          </p>
        </FooterData>
    </Block>
  </GridWrap>
  </div>
)

export default Index
