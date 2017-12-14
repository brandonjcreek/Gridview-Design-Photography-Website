import React from "react"
import styled from "styled-components"

const GridWrap = styled.div`
display: block;
background: #555;
@media(min-width: 768px){
  height: calc(100vh - 90px);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 8px;
  grid-template-areas:
    "one  one   two   two two"
    "one  one   two   two two"
    "one  one   three  three three"
    "four four  three  three three"
    "footer footer  footer  footer footer"
  }
`

export default GridWrap