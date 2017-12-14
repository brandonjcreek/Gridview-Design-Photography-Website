import React from "react"
import styled from "styled-components"

const ToggleButton = styled.button`
  position: fixed;
  right: 30px;
  top: 30px;
  background: white;
  z-index: 9000;
  @media (min-width: 768px){
    display: none;
  }
`

export default ToggleButton