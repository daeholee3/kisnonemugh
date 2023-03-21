import React from 'react'
import styled from 'styled-components'
import instagram from '../assets/images/instagram.png'
import behance from '../assets/images/behance.png'
import youtube from '../assets/images/youtube.png'

const Footer = () => {
  return (
    <Wrapper>
    <footer>
      <div className="footer-center">
            <div className="left-footer">
                <span>instagram:<a href="https://www.instagram.com/kisnonemugh/?hl=ko" target="_blank"> @kisnonemugh</a></span>
                <span>Email: kimseonghun1535@gmail.com</span>
            </div>

            <div className="social-icons">
                <img src={instagram} alt="instagram"/>
                <img src={behance} alt="behance"/>
                <img src={youtube} alt="youtube"/>
            </div>
            <div className="right-footer">
                <span>&copy; 2023 Seonghun Kim</span>
                <span>Develope by <a href="https://www.instagram.com/dangerousmanleedaeho/?hl=ko" target="_blank"> @dangerousmanleedaeho</a></span>
            </div>
        </div>
    </footer>  
    </Wrapper>
  )
}

const Wrapper = styled.section`
footer {
    width: 100vw;
    border-top: 1px solid #000;
}
.footer-center {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}
.social-icons {
    display: flex;
    scale: 0.75;
}
.social-icons img {
    padding: 0rem 0.375rem;
}
.footer-center span {
    display: block;
    font-weight: bold;
}
.right-footer {
    text-align: center;
}
.left-footer {
    text-align: center;
}

@media screen and (min-width: 576px) {
    footer{
    }
    .footer-center {
        flex-direction: row;
        justify-content: space-between;
        position: relative;
    }
.social-icons {
    scale: 0.75;
    position: absolute;
    left: 50%;
    transform: translate(-50%,0);
}
.right-footer {
    text-align: right;
}

.left-footer {
    text-align: left;
}
}

`

export default Footer