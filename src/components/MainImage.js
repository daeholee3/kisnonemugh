import React from 'react'
import { GatsbyImage} from "gatsby-plugin-image"
import styled from 'styled-components'


const MainImage = ({images = []}) => {
  return (
    <Wrapper>
    {images.map((photo,index)=>{
        const {image} = photo
        return <GatsbyImage image={image.gatsbyImageData} id="main-gif" alt='main-gif' key={index}/>
    })}
    </Wrapper>
  )
}
const Wrapper = styled.section`

img {
    position: fixed;
    z-index: -1;
}

`

export default MainImage