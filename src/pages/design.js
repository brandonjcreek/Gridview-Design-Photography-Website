/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import MainLayout from "../layouts/main-layout"


const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout title="Design">
      <p>At GRIDVIEW, it is our goal to ensure that all your design needs are met. We offer both Web Design and Graphic Design services to help your business establish a visual identity. Whether you have something specific in mind, or you are starting from a blank slate, we can use our industry experience to create the right design that will convey whatever message you are trying to present. Whether you are needing business cards, a logo, or even a fully responsive website, GRIDVIEW has you covered.
        </p>
    </MainLayout>

  </div>
)

export default About
