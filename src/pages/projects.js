import React from 'react'
import Layout from '../components/Layout'
import { graphql, useStaticQuery } from "gatsby"
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'
import ProjectsList from '../components/ProjectsList'

const query = graphql`
{
    allContentfulKisnonemugh(sort:{updatedAt:DESC}) {
     
        nodes {
          projectTitle
          designTitle
          date
          image {
            gatsbyImageData(layout:FULL_WIDTH)
          }
        }
      
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query);
  const projects = data.allContentfulKisnonemugh.nodes
  return (
    <Layout>
    <GlobalStyle />
    <Wrapper>
        <ProjectsList projects = {projects}/>
    </Wrapper>
    </Layout>
  )
}
const Wrapper = styled.section`
.project-container {
    width: 90%;
    height: calc(100vh - 300);
    margin: 0 auto;
    max-width: 1170px;
    padding-bottom: 10rem;
}
.project-center {
    padding: 5rem 0 5rem 0 ;
    display: flex;
    flex-wrap: wrap;
    gap: 3rem 1rem;
    justify-content: center;
}
.single-project {
    position: relative;
    width: 300px;
    height: 300px;
}
.single-project img {
    height: 100%;
}

.project-info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    display: flex;
    justify-content: space-between;
    visibility: hidden;
    color: var(--clr-white);
}
.project-info span {
    padding: 1rem;
}
.single-project:hover .project-info {
    visibility: visible;
}
.outer-project-info {
    padding: 0.375rem 0;
    display: flex;
    justify-content: space-between;
}
.outer-project-info span {
    display: block;
}

@media screen and (min-width: 576px) {
    .project-center {
            padding: 8rem 0;
            gap: 7rem 3rem;
        }
    
}
@media screen and (min-width: 1170px) {
    .single-project {
            width: 325px;
            height: 325px;
        }
    .project-center {
        justify-content: space-between;
        }
}

@media screen and (min-width: 2560px) {
    .project-container {
            max-width: 1800px;
        }
    .single-project {
        width: 450px;
        height: 450px;
        margin: 3rem;
    }
    .project-center {
        padding: 10rem 0;
        gap: 3rem 3rem;
    }
}

`

export default Projects
