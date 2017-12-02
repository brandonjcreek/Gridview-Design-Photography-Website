/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import MainLayout from "../layouts/main-layout"
import styled from 'styled-components'

const StyledInput = styled.input`
  width: 100%;
  margin-bottom: 10px;
`
const StyledTextArea = styled.input`
  width: 100%;
  height: 10rem;
`


const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout title="Contact Gridview">
      <p>Are you ready to work with me? Use the form below to tell me about your specific needs, and I will reach out to you to discuss in detail how I can help. You can also call me at (501) 303-6161 if you choose to do so.</p><br />
      <StyledInput type="text" placeholder="Name"/><br />
      <StyledInput type="text" placeholder="Phone"/><br />
      <StyledInput type="text" placeholder="Email"/><br />
      <StyledTextArea rows="4"/>
    </MainLayout>

  </div>
)

export default About
