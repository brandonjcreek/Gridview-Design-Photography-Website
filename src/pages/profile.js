/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import MainLayout from "../layouts/main-layout"

const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout title="About Brandon">
      <p>Hi, I'm Brandon, and I've been doing photography and graphic design for over a decade. Back in 2015, I developed an interest in Front-End Web Development, which quickly grew into a passion. Growing up, I had always been somewhat techie, and had even developed a few sites for myself and a few others, but the technologies that I had used to create such sites always felt like magic to me, and while the tools made the process of getting a site up off the ground easy and straightforward, one of the major drawbacks was that I often found myself needing something specific to my needs, which would frequently lead me into hundreds of Google queries trying to find the right plugin for my CMS. I finally decided enough was enough and set out on my journey to learn exactly how the web worked. I started where mostly everyone else does–building static sites using HTML and CSS—and soon dipped my toes into the world of Javascript by way of JQuery, which by this time was sort of on its way out the door. I later decided to become much more acclimated to vanilla Javascript, which opened my world up to a world of possibilities.<br />
      
      
      </p>
    </MainLayout>
  </div>
)

export default About
