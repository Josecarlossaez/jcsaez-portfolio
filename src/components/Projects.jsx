import React from 'react'
import esChallenge from "../assets/img/tourney ss.png";
import ironFashion from "../assets/img/ironFashion.png";
import spaceFighter from "../assets/img/spaceFighter.png";
import DataImage from './DataImage';
import ImageData from './ImageData';
import logo from "../assets/img/solologo.png";
import masQDance from "../assets/img/logo.png"



function Projects() {
    const listProjects = [
        {
        title : "+QDance",
        description:"QDance is my first professional project. I am developing it completely selflessly for a DJ association in Valencia. The purpose of my web app is for the administrator to be able to manage it completely, without needing to contact me to update the website as many times as they want. Currently, it's under construction, but you can visit the code on my GitHub ",
        langs: "React, JWT, Nodejs, Express, JavaScript, MongoDB, Axios, html, css",
        linkGitClient:"https://github.com/Josecarlossaez/masquedance-client",
        linkGitServer:"https://github.com/Josecarlossaez/masquedance-server",
        picture: masQDance, 
        },
        {
            title : "esChallenge",
            description: "esChallenge has been made as a third project in Ironhack. It is a Tourney Generator wich all users can create their own championship. To participate in a tournament you have to create your own team or join one. Each user can creates only one team, but he can joins all teams with permisions. For enter a team you should introduce a correct password wich team creator has passed you. The tournament begins when eight teams are sign up in it, only the Admin is able to start and edit the tourney. Choice a game and organize the battle ",
            langs: "React, JWT, Nodejs, Express, JavaScript, MongoDB, Axios, html, css",
            collaborators: "David Lázaro",
            link:"https://es-challenge.netlify.app/",
            picture: esChallenge, 
        },
        {
            title : "ironFashion",
            description: "This website was the second project in Ironhack. The idea was make an app to everyone who wants show their creations. With IronFashion you can create a Product and a Products Collection to show all the world your skills. People can writes a comment about each product or collection. Also, the admin can post news, events or everything he thinks important at the blog page ",
            langs: "Nodejs, Express, JavaScript, MongoDB, HBS, html, css",
            collaborators: "Francisco José García (Curro)",
            link:"https://iron-fashion.cyclic.app/",
            picture: ironFashion,
        },
        {
            title : "spaceFighter",
            description: " When I was a child, I went with my parents to eat something to the bar. In the bar, normally there was a machine wich you can play a videogame. One of my favourites is called Aero Fighters, from Neo Geo. Is for that, I made an airplane video game. I want to revive push the button one thousand times per minute with with all your energies ",
            langs: "JavaScript, Jquery, canvas, html, css",
            link:"https://josecarlossaez.github.io/space-fighter/",
            picture: spaceFighter,
        }

    ]
   
  return (
    <section id="projects" className='projects'>
       <div className='title-projects'>
        <img src={logo} alt="" />
        <h1>Projects</h1>
       </div>
    {
      listProjects.map((project, index)=> {
      
        return(
            
            <div>
           { index % 2 !== 0 ?  (<ImageData key={index} {...project}/> ) : (<DataImage key={index} {...project} />)}
             
            </div>
        )
      })
    }
    </section>
  )
}

export default Projects