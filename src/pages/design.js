/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import DisplayLayout from "../layouts/display-layout"
import styled from 'styled-components'

const BottomDisplay = styled.div`
  grid-area: display;
  display:grid;
  grid-template-columns: 1fr 1fr 2fr;
  background: grey;
`

const Odd = styled.div`
background: #bbb;
`
const Even = styled.div`
background: #555;
`

const Cta = styled.div`
display: flex;
background: #555;
align-items: center;
justify-content: center;
h2{
  color: #fff;
  text-align: center;
  aligh
}
`

const Design = ({ transition }) => (
  <div style={transition && transition.style}>
    <DisplayLayout title="Design">
      <p>At GRIDVIEW, it is our goal to ensure that all your design needs are met. We offer both Web Design and Graphic Design services to help your business establish a visual identity. Whether you have something specific in mind, or you are starting from a blank slate, we can use our industry experience to create the right design that will convey whatever message you are trying to present. Whether you are needing business cards, a logo, or even a fully responsive website, GRIDVIEW has you covered.
        </p>
      <BottomDisplay>
        <Even></Even>
        <Odd></Odd>
        <Cta>
          <h2>Check out our design portfolio.</h2>
        </Cta>
      </BottomDisplay>
    </DisplayLayout>
  </div>
)

export default Design
