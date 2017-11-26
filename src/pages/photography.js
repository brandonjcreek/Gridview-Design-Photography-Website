/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import {MainLayout, PageTitle, PageContent} from "../layouts/main-layout"


const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout>
      <PageTitle>About</PageTitle>
      <PageContent>
        <p>GRIDVIEW Design and Photography, formerly Brandon Creek Photography, was established in early 2017. The goal was to form a company that offered a full range of visual arts services that did not end with just Photography, but also focused on Web and Graphic Design. With over a decade's worth of experience in both Graphic Design and Photography, it is our hope that our services can help you or your business. We service both individuals and businesses, and we try to remain competitive with our prices to help you save money without sacrificing quality. Reach out to us today to see how we can help meet your needs.
        </p>
      </PageContent>
    </MainLayout>

  </div>
)

export default About
