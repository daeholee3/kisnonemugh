import React from "react"
import { graphql} from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import Layout from "../components/Layout"
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'



const ProjectTemplate = ({data}) => {
    
    const {images} = data.contentfulKisnonemugh
  return (
    <Layout>
      <GlobalStyle />
      <Wrapper>
        <div className="project-detail-container">
          <div className="project-detail-center">
        {
        images.map((image,index)=>{
             return  <GatsbyImage image={image.gatsbyImageData} key={index} alt='project-detail' />
        })
        }
        </div>
        </div>
    </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.section`
@media screen and (min-width: 576px) {
  .project-detail-container {
    width: 100vw;
  }
    .project-detail-center {
           width: 90%;
           margin: 0 auto;
           padding-top: 3rem;
           max-width: 1170px;
           display: flex;
           flex-direction: column;
        }
    
}
@media screen and (min-width: 2560px){
      .project-detail-center {
           max-width: 1800px;
        }
}
`


export const query = graphql`
  query ($designTitle: String) {
    contentfulKisnonemugh(designTitle: {eq: $designTitle}) {
      designTitle
      projectTitle
      images {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`


export default ProjectTemplate





