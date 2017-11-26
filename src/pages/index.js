import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const GridWrap = styled.div`
display: block;
background: #333;


@media(min-width: 768px){
  height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 10px;
  grid-template-areas:
    "one  one   two   two two"
    "one  one   two   two two"
    "one  one   logo  three three"
    "five five  logo  three three"
    "five five  four  four four"
  }
`


const Block = styled.div`
  position: relative;
  background: ${props => props.color || '#fff'};
  padding: ${props => props.padding || '0'};
  grid-area: ${props => props.area};
  border-radius: 2px;
  overflow: hidden;
  @media (max-width: 768px) {
    margin-bottom: 10px;
    min-height: 450px;
  }
`
const Caption = styled.div`
  opacity: 1;
  transform: translateY(-100%);
  width: 100%;
  height: 100%;
  background: ${props => props.color || '#555'};
  color: white;
  transition: all 300ms ease-in-out;
  ${Block}:hover & {
    opacity: 1;
    transform: translateY(0%)
  }
`

const ContentWrap = styled.div`
  width: auto;
  grid-column: 2/3;
  justify-self: center;
  align-self: center;
`

const Headline = styled.h1`
  font-size: 5rem;
  font-weight: 300;
  justify-self: center;
  align-self: center;
  color: #eee ;
`

const Index = ({ transition }) => (
  <div style={transition && transition.style}>
  <GridWrap>
    <Block area='logo'>Logo</Block>
    <Block area='one'>
      <h1>Let's Make Something Together.</h1>
    </Block>
    <Block area='two' padding='20px'>Block Two</Block>
    <Block area='three'>
      <Caption>Block Three</Caption>
    </Block>
    <Block area='four'>
      <Caption color="red">Block Four</Caption>
    </Block>
    <Block area='five'>Block Five</Block>
  </GridWrap>
  </div>
)

export default Index
