import React from 'react'



function ImageData(props) {
    
    
   const {title, description,langs, collaborators, link,picture} = props
  return (
    <div className='project-image-data' id= "data-image" style={{display:"flex" }}>
        <div>
        <a href={link} target="blank" >
           <img src={picture} alt="" className="grow-image" />
        </a>
           
        </div>
        <div className='text-project2'>
       <h2 className='title-h2'>{title}</h2>
       <p>{description}</p>
       <p>{langs}</p>
       {collaborators && <h5>Collaborators: {collaborators}</h5>}
       <a href={link} target="blank">Visite:{title}</a>
        </div>
    </div>
  )
}

export default ImageData