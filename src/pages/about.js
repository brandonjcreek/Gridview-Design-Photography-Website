/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import MainLayout from "../layouts/main-layout"

const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout title="About Gridview">
      <p>
        GRIDVIEW Design and Photography offers a full range of visual arts services. 
        Whether you are in need of a set of professional photos of yourself or your family, a logo for your business, or a modern and reactive website built with the latest technologies like React JS, GRIDVIEW has you covered. Our mission is to insure that you receive the highest quality of service throughout your project, and we also price our services to where we not only have a competitive edge in the marketplace, but we also strive to make the types of services that we provide more accessible to individuals and small businesses.<br />
        So the next time you are needing professional photos, graphic design services, or even a website, give us a call and let us know how we can help. Let's make something together!</p><br />
        <Link to="profile">Learn more about Brandon.</Link>
    </MainLayout>
  </div>
)

export default About
