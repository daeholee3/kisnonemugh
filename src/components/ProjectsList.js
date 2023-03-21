import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import slugify from 'slugify'






const ProjectsList = ({projects = []}) => {

  return (
        <div className="project-container">
          <div className="project-center">
            {projects.map((project,index)=>{
                const {designTitle, date, projectTitle, image} = project
                const slug = slugify(designTitle,{lower:true})
                return (
                  <Link key={index} to={`/${slug}`}>
         <div className="single-project">
              <GatsbyImage image={image.gatsbyImageData} alt={designTitle}/>
              <div className="project-info">
                <span>{projectTitle}</span>
                <span>{designTitle}</span>
              </div>
            <div className="outer-project-info">
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




export default ProjectsList