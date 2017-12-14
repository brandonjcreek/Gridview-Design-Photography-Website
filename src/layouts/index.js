import React, { Component } from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import styled from 'styled-components'
import { Transition } from "react-transition-group"
import Navbar from "../components/Navbar"
import ToggleButton from "../components/ToggleButton"
import MobileMenu from "../components/MobileMenu"

import "./index.css"
import "./styles.css"

const Header = () => (
  <Navbar />
)

class TemplateWrapper extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      children: PropTypes.func,
      clicked: false,
    }
  }

  handleClick(){
    this.setState({clicked: !this.state.clicked})
  }

  render(){
    return (
      <div>
        <Helmet>
          <title>Graphic Design - Web Design - Photography - Gridview</title>
          <meta name="description" content="Gridview offers a full range of professional Web and Graphic Design Services as well as Photography." />
          <meta name="keywords" content="Graphic Design, Web Design, Photography, Gridview" />
        </Helmet>
        <ToggleButton onClick={this.handleClick.bind(this)}>||</ToggleButton>
        <Header />
        <div className="layout-wrap">
          {this.props.children()}
        </div>
        {this.state.clicked ? 
            <MobileMenu>
              <h1 style={{ color: "#fff" }}>Mobile Menu</h1>
            </MobileMenu>
        :
        null
        }
      </div>
    )
  }
}

export default TemplateWrapper

