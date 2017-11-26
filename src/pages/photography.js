/* eslint-disable react/prop-types */
import React from "react"
import Link from "gatsby-link"
import MainLayout from "../layouts/main-layout"


const About = ({ transition }) => (
  <div style={transition && transition.style}>
    <MainLayout title="Photography">
      <p>Photography has been a passion of ours since 2005, and it continues to be a core staple to our business offerings. We offer our photography services to both individuals and businesses. We also provide professional retouching services to help your photos look their best. Perhaps you are needing someone to photograph you and your family, or maybe you are needing a full set of images for your brochure or website, we do it all.</p>
    </MainLayout>

  </div>
)

export default About
