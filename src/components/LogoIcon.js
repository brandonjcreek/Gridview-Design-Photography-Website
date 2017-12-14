import React from "react"
import styled from "styled-components"
import Block from "./Layout/Block"

const LogoWrap = styled.div`{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin: 0px 30px;
}
`
const LogoBound = styled.div`
  width: 90px;
  height: 90px;
`

const LogoIcon = ()=>(
    <LogoWrap>
          <LogoBound>
            <svg id="Layer_1" viewBox="0 0 108 108">
              <defs>
                <linearGradient id="linear-gradient" x1="75.52" y1="38.13" x2="107.98" y2="69.86" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#3bb7ff" />
                  <stop offset="1" stopColor="#66b7c7" />
                </linearGradient>
                <linearGradient id="linear-gradient-2" x1="116.98" y1="122.01" x2="-12.51" y2="-14.05" gradientUnits="userSpaceOnUse">
                  <stop offset="0" stopColor="#808080" />
                  <stop offset="1" stopColor="#E6E6E6" />
                </linearGradient>
                <linearGradient id="linear-gradient-3" x1="80.12" y1="157.09" x2="-49.37" y2="21.03" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-4" x1="118.89" y1="120.19" x2="-10.61" y2="-15.87" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-5" x1="155.71" y1="85.14" x2="26.22" y2="-50.92" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-6" x1="130.34" y1="96.5" x2=".84" y2="-39.55" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-7" x1="91.8" y1="133.18" x2="-37.69" y2="-2.88" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-8" x1="111.58" y1="114.35" x2="-17.91" y2="-21.71" xlinkHref="#linear-gradient-2" />
                <linearGradient id="linear-gradient-9" x1="92.73" y1="132.29" x2="-36.76" y2="-3.76" xlinkHref="#linear-gradient-2" />
              </defs>
              <title>
                Gridview-icon
            </title>
              <path className="cls-1" d="M75.3 37.6H108v32.6H75.3z" />
              <path className="cls-2" d="M5 0h27.7v32.6H0V4.9A4.93 4.93 0 0 1 5 0z" />
              <path className="cls-3" d="M0 102.9V75.3h32.7v32.6H5a5 5 0 0 1-5-5z" />
              <path className="cls-4" d="M103 107.9H75.3V75.3H108V103a5 5 0 0 1-5 4.9z" />
              <path className="cls-5" d="M108 5v27.7H75.3V0H103a5 5 0 0 1 5 5z" />
              <path className="cls-6" d="M37.7 0h32.7v32.7H37.7z" />
              <path className="cls-7" d="M0 37.6h32.7v32.6H0z" />
              <path className="cls-8" d="M37.7 37.6h32.7v32.6H37.7z" />
              <path className="cls-9" d="M37.7 75.3h32.7V108H37.7z" />
            </svg>
          </LogoBound>
        </LogoWrap>
)

export default LogoIcon