import React from 'react'
import Layout from '../components/Layout'
import GlobalStyle from '../assets/css/GlobalStlye'
import { graphql, useStaticQuery } from "gatsby"
import PhotoList from '../components/PhotoList'
import styled from 'styled-components'

const query = graphql`
  {
    allContentfulPhoto(sort:{updatedAt:DESC}) {
      nodes {
        image {
          gatsbyImageData(placeholder:BLURRED)
        }
        date
        photoNumber
      }
    }
  }
`

const Photo = () => {
   const data = useStaticQuery(query)
  const photos = data.allContentfulPhoto.nodes
  return (
    <Layout>
    <GlobalStyle />
    <Wrapper>
         <PhotoList photos = {photos}/>
    </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
.single-photo{
    position: relative;
    margin: 0.375rem 0.375rem;
}
.photo-info {
    font-size: 1.5rem;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.485);
    display: flex;
    align-items: center;
    visibility: hidden;
    color: var(--clr-black);
}
.photo-info span {
  margin-left: 1rem;
  font-size: 1rem;
}

@media screen and (min-width: 576px) {
    .photo-container {
            width: 100vw;
        }
    .photo-center{
      width: 50%;
      margin: 0 auto;
      max-width: 1170px;
    }
    .single-photo {
    margin: 1.5rem 1rem;

    }
    .single-photo:hover .photo-info {
    visibility: visible;
}
}
@media screen and (min-width: 2560px) {

    .photo-center{
      width: 50%;
      margin: 0 auto;
      max-width: 1800px;
    }
    .single-photo {
    margin: 1.5rem 1rem;

    }
}
`

export default Photo
