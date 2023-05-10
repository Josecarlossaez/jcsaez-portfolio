import React from 'react'

function DataImage({title, description,langs, collaborators, link,linkGitClient, linkGitServer, picture}) {
  return (
    <div>
         <div className='project-image-data' style={{display:"flex"}}>
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
        <div>
        <a href={link} target="blank" >
           <img src={picture} alt="" className="grow-image"/>
        </a>
        </div>
    </div>

    </div>
  )
}

export default DataImage