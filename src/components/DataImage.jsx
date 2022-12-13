import React from 'react'

function DataImage({title, description, collaborators, link,picture}) {
  return (
    <div>
         <div className='project-image-data' style={{display:"flex"}}>
        <div className='text-project2'>
       <h2 className='title-h2'>{title}</h2>
       <p>{description}</p>
       <h5>Collaborators:{collaborators}</h5>
       <a href={link} target="blank">Visite:{title}</a>
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