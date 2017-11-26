import React from 'react'
import styled from 'styled-components'

export const MainLayout = styled.div `
  position: relative;
  margin: 2rem;
  padding: 0 2rem;
  height: 100%;
  @media (min-width: 768px){
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 10% 80% 10%;
    grid-template-areas:
      ". title ."
      ". content ."
    }
`;
export const PageTitle = styled.h2 `
  grid-area: title
`
export const PageContent = styled.div `
  grid-area: content;
`

const StyledFooter = styled.footer `
  background: purple;
  width: 100vw;
`

export const Footer = () => ( <
  StyledFooter > This is a footer < /StyledFooter>
)