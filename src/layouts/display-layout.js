import React from 'react'
import styled from 'styled-components'
//import default from './index';

const PageLayout = styled.div `
  position: relative;
  padding: 0 2rem;
  height: 100%;
  min-height: calc(100vh - 90px);
  @media (min-width: 768px){
    padding: 0;
    display: grid;
    grid-template-columns: ${props => props.cols||"1fr 2fr 1fr"};
    grid-template-rows: 95px auto 250px;
    grid-template-areas:
      ". title ."
      ". content ."
      "display display display";
    h2{
      grid-area: title;
      font-size: 1.75rem;
      margin-top: 2rem;
    }
    .page-content{
      grid-area: content;
      p{
        font-size: 1.125rem;
      }
    }
    }
`;

const DisplayLayout = (props) => (
  <PageLayout>
    <h2 className="title">{props.title}</h2>
    <div className="page-content">{props.children[0]}</div>
    {props.children[1]}
  </PageLayout>
)
export default DisplayLayout