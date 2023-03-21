import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const PhotoList = ({photos = []}) => {
  return (
        <div className="photo-container">
            <div className="photo-center">
            {photos.map((photo,index)=>{
                const {image,date,photoNumber} = photo
                return(
                    <Link key={index} to={`/${photoNumber}`}>
                    <div className="single-photo">
                        <GatsbyImage image={image.gatsbyImageData} alt='photo'/>
                        <div className="photo-info">
                        <span>{date}</span>
                        </div>
                     </div>
                    </Link>
                )
            })}
            </div>
        </div>
  )
}

export default PhotoList