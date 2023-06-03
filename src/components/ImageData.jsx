import React from 'react'



function ImageData(props) {
    
    
   const {title, description,langs, collaborators, link,picture,linkGitClient,linkGitServer} = props
  return (
    <div className='project-image-data' id= "data-image" >
        <div className="image-project">
        <a href={link} target="blank" >
           <img src={picture} alt="" className="grow-image" />
        </a>
           
        </div>
        <div className='text-project2'>
       <h2 className='title-h2'>{title}</h2>
       <p>{description}</p>
       <p>{langs}</p>
       {collaborators && <h5>Collaborators: {collaborators}</h5>}
       {link && <a href={link} target="blank">Visite: {title}</a>}
       {linkGitClient && <a href={linkGitClient} target="blank">GitHub Client</a>}
       <br />
       {linkGitServer && <a href={linkGitServer} target="blank">GitHub Server</a>}
        </div>
    </div>
  )
}

export default ImageData