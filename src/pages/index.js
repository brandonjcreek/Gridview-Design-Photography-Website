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
    "one  one   three  three three"
    "four four  three  three three"
    "four four  logo  footer footer"
  }
`


const Block = styled.div`
  display: ${props => props.display || 'block'};
  flex-flow: ${props => props.flow || 'row'};
  justify-content: ${props => props.justify || '"center'};
  position: relative;
  background: ${props => props.color || '#fff'};
  background-image: url(${props => props.img || ''});
  background-size: cover;
  background-position: center;
  padding: ${props => props.padding || '0'};
  grid-area: ${props => props.area};
  border-radius: 2px;
  overflow: hidden;
  align-items: center;
  h1, h3{
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  }
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

const FooterData = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  p{
    text-align: center;
    width: auto;
    color: #fff;
    font-size: .8rem;
    font-weight: 300;
  };
  @media (min-width: 768px) {
    align-items: center;
    p{
      text-align: left;
      margin-bottom: 0;
    }
  }
`

const Index = ({ transition }) => (
  <div style={transition && transition.style}>
  <GridWrap>
      <Block display="flex" flow="column" justify="center" img="https://images.unsplash.com/photo-1499673610122-01c7122c5dcb?auto=format&fit=crop&w=3026&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D" area='one'>
      <h1>Welcome to GRIDVIEW</h1>
      <h3>Let's make something together.</h3>
    </Block>
    <Block area='two' padding='20px'>
        <h2>Design from beginning to end.</h2>
    </Block>
      <Block area='three' padding='20px'>
        <h2>Quality Photography for any occasion.</h2>
    </Block>
    <Block area='four'>
      <h3>Testimonials</h3>
    </Block>
      <Block color="222" area='logo'>
      <div className="main-logo-wrap">
          <svg id="Layer_1"  viewBox="0 0 108 108">
            <defs>
            <linearGradient id="linear-gradient" x1="75.52" y1="38.13" x2="107.98" y2="69.86" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#3bb7ff" />
              <stop offset="1" stopColor="#66b7c7" />
            </linearGradient>
            <linearGradient id="linear-gradient-2" x1="116.98" y1="122.01" x2="-12.51" y2="-14.05" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#808080" />
                <stop offset="1" stopColor="#E6E6E6" />
            </linearGradient>
            <linearGradient id="linear-gradient-3" x1="80.12" y1="157.09" x2="-49.37" y2="21.03" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-4" x1="118.89" y1="120.19" x2="-10.61" y2="-15.87" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-5" x1="155.71" y1="85.14" x2="26.22" y2="-50.92" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-6" x1="130.34" y1="96.5" x2=".84" y2="-39.55" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-7" x1="91.8" y1="133.18" x2="-37.69" y2="-2.88" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-8" x1="111.58" y1="114.35" x2="-17.91" y2="-21.71" xlinkHref="#linear-gradient-2"/>
    <linearGradient id="linear-gradient-9" x1="92.73" y1="132.29" x2="-36.76" y2="-3.76" xlinkHref="#linear-gradient-2"/>
  </defs>
          <title>
            Gridview-icon
  </title>
          <path className="cls-1" d="M75.3 37.6H108v32.6H75.3z" />
          <path className="cls-2" d="M5 0h27.7v32.6H0V4.9A4.93 4.93 0 0 1 5 0z" />
          <path className="cls-3" d="M0 102.9V75.3h32.7v32.6H5a5 5 0 0 1-5-5z" />
          <path className="cls-4" d="M103 107.9H75.3V75.3H108V103a5 5 0 0 1-5 4.9z" />
          <path className="cls-5" d="M108 5v27.7H75.3V0H103a5 5 0 0 1 5 5z" />
          <path className="cls-6" d="M37.7 0h32.7v32.7H37.7z" />
          <path className="cls-7" d="M0 37.6h32.7v32.6H0z" />
          <path className="cls-8" d="M37.7 37.6h32.7v32.6H37.7z" />
          <path className="cls-9" d="M37.7 75.3h32.7V108H37.7z" />
</svg>
      </div>
</Block>
    <Block color="222"area='footer'>
        <FooterData>
          <p>
          ©2017 GRIDVIEW Design &amp; Photography<br/>
          gridviewdesign@gmail.com — 501-303-6161<br/>
          Home | About | Design | Photography | Contact<br/>
          Terms &amp; Conditions | FAQ
          </p>
        </FooterData>
    </Block>
  </GridWrap>
  </div>
)

export default Index
