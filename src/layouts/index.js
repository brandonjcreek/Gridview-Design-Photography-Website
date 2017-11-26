import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'

import "./index.css"

const Navigation = styled.nav `
  display: grid;
  grid-template-columns: 1fr 3fr;
  background: linear-gradient(to right, rgba(20,30,48,1) 0%, rgba(30,46,74,1) 100%);
  margin: 0;
  height: 90px;
`

const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
`
const StyledH1 = styled.h1 `
  margin: 0;
  justify-self: center;
  align-self: center;
`

const StyledUl = styled.ul `
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style: none;
  align-items: center;
  margin: 0;
`
const StyledLi = styled.li `
  margin: 0;
`
const NavLink = styled(Link)`
  color: #fff;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-weight: 300;
`

const Header = () => (
  <Navigation>
    <StyledH1>
      <LogoLink to="/">Gridview</LogoLink>
    </StyledH1>
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

const TemplateWrapper = ({children}) => (
  <div>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
      {
        name: `description`,
        content: `Sample`
      }, {
        name: `keywords`,
        content: `sample, something`
      }
    ]}/>
    <Header/>
    <div>
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
