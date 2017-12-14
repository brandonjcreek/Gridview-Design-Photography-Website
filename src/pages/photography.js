/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import DisplayLayout from "../layouts/display-layout"
import styled from 'styled-components'

const Even = styled.div`
  overflow: hidden;
`

const BottomDisplay = styled.div`
  grid-area: display;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: grey;
`
const StyledLink = styled.div`{
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 100%;
  height: 100%;
  font-family: 'Roboto', sans-serif;
  font-size: 2rem;
  background: rgba(0,0,0,0.7);
  color: #fff;
  transform: translateY(-100%);
  transition: all 400ms ease-in-out;
  ${Even}:hover & {
    transform: translateY(0%)
  }
}`



const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <DisplayLayout title="Photography">
      <p>
        Photography has been a passion of ours since 2005, and it continues to be a core staple to our business offerings. We offer our photography services to both individuals and businesses. We also provide professional retouching services to help your photos look their best. Perhaps you are needing someone to photograph you and your family, or maybe you are needing a full set of images for your brochure or website, we do it all.<br/>
      </p>
      <BottomDisplay>
        <Even>
          <Link to='/photos'>
            <StyledLink to='/photos'>FAMILIES</StyledLink>
          </Link>
        </Even>
        <Even>
          <Link to='/photos'>
            <StyledLink to='/photos'>SENIORS</StyledLink>
          </Link>
        </Even>
        <Even>
          <Link to='/photos'>
            <StyledLink to='/photos'>EVENTS</StyledLink>
          </Link>
        </Even>
        <Even>
          <Link to='/photos'>
            <StyledLink to='/photos'>BUSINESS</StyledLink>
          </Link>
        </Even>
      </BottomDisplay>
    </DisplayLayout>
  </div>
)

export default About
