import React from "react"
import styled from "styled-components"

const Block = styled.div`
  display: ${props => props.display || 'block'};
  flex-flow: ${props => props.flow || 'row'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'flex-start'};
  position: relative;
  background: ${props => props.color || '#fff'};
  background-image: url(${props => props.img || ''});
  background-size: cover;
  background-position: center;
  padding: ${props => props.padding || '0'};
  grid-area: ${props => props.area};
  border-radius: 2px;
  overflow: hidden;
  h1{
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  };
  h3{
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.5);
  };
  @media (max-width: 768px) {
    margin-bottom: 0px;
    min-height: ${props => props.height || "450px"};
  }
`

export default Block