/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import DisplayLayout from "../layouts/display-layout"
import styled from 'styled-components'

const BottomDisplay = styled.div`
  grid-area: display;
  display:grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  background: grey;
`

const Odd = styled.div`
background: #bbb;
`
const Even = styled.div`
background: #555;
`

const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <DisplayLayout title="Photography">
      <p>
        Photography has been a passion of ours since 2005, and it continues to be a core staple to our business offerings. We offer our photography services to both individuals and businesses. We also provide professional retouching services to help your photos look their best. Perhaps you are needing someone to photograph you and your family, or maybe you are needing a full set of images for your brochure or website, we do it all.<br/>
       <Link to='/photos'>Photos</Link>
      </p>
      <BottomDisplay>
        <Even></Even>
        <Odd></Odd>
        <Even></Even>
        <Odd></Odd>
      </BottomDisplay>
    </DisplayLayout>
  </div>
)

export default About
