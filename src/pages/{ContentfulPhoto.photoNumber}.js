import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { graphql} from "gatsby"
import { GatsbyImage} from "gatsby-plugin-image"
import Layout from "../components/Layout"
import GlobalStyle from '../assets/css/GlobalStlye'
import styled from 'styled-components'

const PhotoTemplate = ({data}) => {
const {images,date} = data.contentfulPhoto
const [index, setIndex] = useState(0);
useEffect(()=>{
const lastIndex = images.length -1 ;
if(index < 0){
  setIndex(lastIndex)
}
if(index > lastIndex){
  setIndex(0)
}
},[index])

  return (
    <Layout>
      <GlobalStyle/>
        <Wrapper>
        <section className="section">
                      <span>    
              {index+1}/{images.length}
            </span>

          <div className="section-center">
  
            {images.map((image,imageIndex)=>{
              let position = 'nextSlide';
              if(imageIndex === index){
                position = 'activeSlide';
              }
              if(imageIndex === index - 1 || ( index === 0 && imageIndex === image.length - 1)){
                position = 'lastSlide'
              }
            return (
              <article className={position} key={imageIndex}> 
              <div className="single-image-container">
                <GatsbyImage image={image.gatsbyImageData}  alt={date}/>
              </div>
              </article>
            )
          })}
            <button className='prev' onClick={()=>setIndex(index-1)}>
              <FiChevronLeft/>
            </button>
            <button className='next' onClick={()=>setIndex(index+1)}>
              <FiChevronRight/>
            </button>
              
          </div>
        </section>
      </Wrapper>         
    </Layout>
  )
}


const Wrapper = styled.section`

.section {
  width: 100vw;
  margin: 0rem auto;
  text-align: center;
}
.section span {
display: block;
font-size: 1rem;
position: absolute;
left: 50%;
transform: translate(-50%,0);
z-index: 1;
} 

.section-center {
  height: 100vh;
  position: relative;
  display: flex;
  overflow: hidden;
  justify-content: center;
  max-width: 550px;
  margin: 0 auto;
}
.section-center svg {
  width: 1.5rem;
  height: 1.5rem;
}

.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color:rgba(0, 0, 0, 0.3);
  color: var(--clr-white);
  width: 2rem;
  height: 2rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}
.prev:hover,
.next:hover {
  background: var(--clr-black);
}
.prev {
  left: 0;
}
.next {
  right: 0;
}

article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
  display: grid;
  align-items: center;
}
article.activeSlide {
  opacity: 1;
  transform: translateX(0);
}
article.lastSlide {
  transform: translateX(-100%);
}
article.nextSlide {
  transform: translateX(100%);
}

@media screen and (min-width: 576px) {
.section-center {
  height: 1000px;
}
.section span {
font-size: 1.5rem;
} 

}
@media screen and (min-width: 2560px){
.section span {
font-size: 1.5rem;
} 
.section-center {
  max-width: 800px;
  height: 100vh;
}
}


`


export const query = graphql`
query($photoNumber: Int){
  contentfulPhoto(photoNumber:{eq:$photoNumber}){
    
      image{
        gatsbyImageData(layout:FULL_WIDTH)
      }
      images{
        gatsbyImageData(layout:FULL_WIDTH)
      }
      date
    	photoNumber
    }
  
}`

export default PhotoTemplate
