import React from 'react'
import styled from 'styled-components'
//import default from './index';

const PageLayout = styled.div `
  position: relative;
  margin: 2rem;
  padding: 0 2rem;
  height: 100%;
  @media (min-width: 768px){
    padding: 0;
    display: grid;
    grid-template-columns: ${props => props.cols||"1fr 2fr 1fr"};
    grid-template-areas:
      ". title ."
      ". content .";
    h2{
      grid-area: title;
      font-size: 1.75rem;
    }
    .page-content{
      grid-area: content;
      p{
        font-size: 1.125rem;
      }
    }
    }
`;

const MainLayout = (props) => (
  <PageLayout>
    <h2 className="title">{props.title}</h2>
    <div className="page-content">{props.children}</div>
  </PageLayout>
)
export default MainLayout