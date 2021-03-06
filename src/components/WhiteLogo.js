import React from "react"
import styled from "styled-components"
import Link from "gatsby-link"

const LogoLink = styled(Link) `
  padding-left: 10%;
  width: 200px;
  color: #fff;
  text-decoration: none;
  align-self: center;
`

const WhiteLogo = () => (
    <LogoLink to="/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 755.3 108">
        <path className="st0" d="M75.3 37.6H108v32.6H75.3zM5 0h27.7v32.6H0V4.9C0 2.2 2.2 0 5 0zM0 102.9V75.3h32.7v32.6H5c-2.8 0-5-2.2-5-5zM103 107.9H75.3V75.3H108V103c0 2.7-2.3 4.9-5 4.9zM108 5v27.7H75.3V0H103c2.7 0 5 2.2 5 5zM37.7 0h32.7v32.7H37.7zM0 37.6h32.7v32.6H0zM37.7 37.6h32.7v32.6H37.7zM37.7 75.3h32.7V108H37.7z" />
        <g className="st1">
          <path className="st0" d="M206.1 87.8c-1.9 3.3-5.7 6.4-11.3 9.3s-12.4 4.5-20.5 4.5c-10.6 0-19.2-3.8-25.8-11.3-6.5-7.5-9.9-17.4-9.9-29.5V45.6c0-11.7 3.2-21.2 9.6-28.4 6.4-7.4 14.8-11 25.1-11 9.9 0 17.8 2.5 23.7 7.7s8.8 11.7 8.5 19.6l-.1.4h-2.9c0-7.1-2.5-13-7.7-17.4-5-4.5-12.3-6.8-21.6-6.8s-17 3.3-22.7 10-8.6 15.3-8.6 25.8v15.3c0 11 2.9 20.1 8.9 27 5.8 7 13.6 10.4 23.4 10.4 7.4 0 13.5-1.3 18.4-3.6s8.1-5.2 9.9-8.4V59.8H174v-3.5h32v31.5zM240.2 56.8v43.6h-3.5V7.6h30.2c9.7 0 17.3 2.1 22.6 6.4 5.3 4.2 7.9 10.4 7.9 18.5 0 5.3-1.7 10-5 14.2s-7.9 7.1-13.6 8.4c6.7 1.1 11.4 3.6 14.3 7.4s4.3 8.5 4.3 14.3v8.8c0 2.9.4 5.4 1.1 7.8.7 2.2 1.8 4.2 3.5 5.6v1.5h-3.3c-1.5-1.8-2.6-3.9-3.5-6.4-.7-2.5-1.1-5.4-1.1-8.6V77c0-6.3-2.1-11.1-6.4-14.8-4.3-3.5-10.4-5.3-18.4-5.3h-29.1v-.1zm0-3.5h26.2c9.5 0 16.4-1.9 20.9-6 4.5-4 6.7-8.9 6.7-14.9 0-7-2.2-12.3-6.8-15.9-4.5-3.6-11.3-5.6-20.2-5.6h-26.7l-.1 42.4zM335 100.2h-3.5V7.5h3.5v92.7z" />
        </g>
        <path className="st1 st0" d="M365.4 100.2V7.5H393c10.7 0 19.6 3.8 27.2 11.4s11.1 17.4 11.1 29.2v11.3c0 11.8-3.8 21.6-11.1 29.2-7.4 7.7-16.4 11.4-27.2 11.4h-27.6v.2zm3.3-89.3v85.9h24.1c9.6 0 17.8-3.5 24.7-10.6 6.8-7.1 10.2-15.9 10.2-26.7V48c0-10.6-3.3-19.5-10.2-26.5-6.8-7.1-15-10.6-24.7-10.6h-24.1z" />
        <g className="st1">
          <path className="st0" d="M478.9 91.2l1.7 5h.4l1.7-5 31.2-83.7h3.8L483 100.3h-4.2L444.1 7.5h3.8l31 83.7zM543.7 100.2h-3.5V7.5h3.5v92.7zM624.8 53.7h-44.6v43.2h51.1v3.5h-54.6V7.5h54.6V11h-51.1v39.3h44.6v3.4zM668.2 78.6l4 15h.4l4-15 21.9-71h3.8l21.7 71 3.9 15h.4l4.2-15 19.1-71h3.8l-24.9 92.8h-3.9l-23-77.3-3.1-9.2h-.4l-2.9 9.2-23.2 77.1h-3.9L645 7.5h3.8l19.4 71.1z" />
        </g>
      </svg>
      </LogoLink>
)

export default WhiteLogo