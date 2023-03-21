import React from 'react'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'
import front from '../assets/images/front.png'
import back from '../assets/images/back.png'

import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const contact = () => {
  return (
    <Layout>
    <Helmet>
        <script src={withPrefix('script.js')} type="text/javascript" />
    </Helmet>
    <GlobalStyle />
    <Wrapper>

    <div className="contact-container">
      <div className="contact-center">
    <div className="flip-card-container card1">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card2">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card3">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card4">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={back} alt="back" />

        </div>
        <div className="flip-card-back">
          <img src={front} alt="front" />

        </div>
      </div>
    </div>
        <div className="flip-card-container card5">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card6">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card7">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={back} alt="back" />

        </div>
        <div className="flip-card-back">
          <img src={front} alt="front" />

        </div>
      </div>
    </div>
        <div className="flip-card-container card8">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card9">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>
        <div className="flip-card-container card10">
      <div className="flip-card">
        <div className="flip-card-front">
          <img src={front} alt="front" />
        </div>
        <div className="flip-card-back">
          <img src={back} alt="back" />
        </div>
      </div>
    </div>



      </div>
    </div>
    </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`

.contact-container {
  width: 100vw;
}
.contact-center {
  height: 80vh;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
/* card flip */
.flip-card-container {
  perspective: 1000px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 80px;
  height: 160px;
}
.flip-card {
  position: relative;
  width: 100%;
  /* height: 100%; */
  transition: transform 0.3s ease-in-out;
  transform-style: preserve-3d;
  height: 200px;
}
.flip-card-container:hover .flip-card {
  transform: rotateY(180deg); 
}
/* Position the front and back side */
.flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.flip-card-front {
}
.flip-card-back {
  transform: rotateY(180deg);
}
.flip-card-front img {
  scale: 1.5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
.flip-card-back img {
  scale: 1.5;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
}
/* indivisual card */
.card1 {
  left: 10%;
  top: 10%;
  transform: rotate(10deg);
}
.card2 {
  left: 20%;
  top: 2%;
  transform: rotate(80deg);
}
.card3 {
  left: 30%;
  top: 40%;
  transform: rotate(30deg);
}
.card4 {
  left: 40%;
  top: 0;
  transform: rotate(120deg);
}
.card5 {
  left: 50%;
  top: 30%;
  transform: rotate(30deg);
}
.card6 {
  left: 60%;
  top: 15%;

  transform: rotate(160deg);
}
.card7 {
  left: 70%;
  top: 20%;
  transform: rotate(150deg);
}
.card8 {
  left: 80%;
  top: 10%;
  transform: rotate(80deg);
}
.card9 {
  left: 74%;
  top: 15%;
  transform: rotate(50deg);
}
.card10 {
  left: 80%;
  top: 70%;
  transform: rotate(120deg);
}
.card11 {
  left: 88%;
  top: 43%;
  transform: rotate(170deg);
}
@media screen and (min-width: 2560px){
.contact-center {
  max-width: 2160px;
}
.flip-card-container {
  width: 120px;
  height: 240px;
}
}
`



export default contact