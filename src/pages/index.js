import * as React from "react"
import styled from 'styled-components'
import "normalize.css"
import GlobalStyle from '../assets/css/GlobalStlye'
import Navbar from "../components/Navbar"
import { graphql, useStaticQuery } from "gatsby"
import MainImage from "../components/MainImage"


const query = graphql`
  {
    allContentfulMainImage {
      nodes {
        image {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
`


export default function Home() {
  const data = useStaticQuery(query);
  const images = data.allContentfulMainImage.nodes
  return (
    <Wrapper>
    <GlobalStyle />
    <Navbar />
   <MainImage images={images}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.nav-header {
  filter: invert(100);
}

.nav-link {
  color: var(--clr-white);
}
#main-gif{
  position: fixed;
}
`