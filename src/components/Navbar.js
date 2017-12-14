import React from "react"
import styled from "styled-components"
import WhiteLogo from "./WhiteLogo"
import Link from "gatsby-link"

const Navigation = styled("nav") `
    display: none;
    background: linear-gradient(to right, rgba(20,30,48,1) 0%, rgba(30,46,74,1) 100%);
    margin: 0;
    height: 90px;
  @media (min-width: 768px){
    display: grid;
    grid-template-columns: 1fr 3fr;
  } 
`
const StyledUl = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  margin: 0;
`
const StyledLi = styled.li`
  margin: 0;
`
const NavLink = styled(Link) `
  color: #fff;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-weight: 300;
`

const Navbar = ()=>(
    <Navigation>
    <WhiteLogo />
    <StyledUl>
      <StyledLi>
        <NavLink to="/">Home</NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink to="/about">About</NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink to="/design">Design</NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink to="/photography">Photography</NavLink>
      </StyledLi>
      <StyledLi>
        <NavLink to="/contact">Contact</NavLink>
      </StyledLi>
    </StyledUl>
  </Navigation>
)

export default Navbar