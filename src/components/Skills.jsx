import React from 'react'
import meter1 from "../assets/img/js.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/html.png";
import meter4 from "../assets/img/nodejs.png";
import meter5 from "../assets/img/express.png";
import meter6 from "../assets/img/mongodb.png";
import meter7 from "../assets/img/react.png";
import meter8 from "../assets/img/jwt.png";
import meter9 from "../assets/img/bootstrap.png";
import meter10 from "../assets/img/postman.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"


function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider" slidesToSlide={2} autoPlay autoPlaySpeed={3000}>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>Javascrip</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>HTML</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5>NODE JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5>EXPRESS JS</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5>MONGO DB</h5>
                            </div>
                            <div className="item">
                                <img src={meter7} alt="Image" />
                                <h5>REACT</h5>
                            </div>
                            <div className="item">
                                <img src={meter8} alt="Image" />
                                <h5>JSON WEB TOKEN</h5>
                            </div>
                            <div className="item">
                                <img src={meter9} alt="Image" />
                                <h5>BOOTSTRAP</h5>
                            </div>
                            <div className="item">
                                <img src={meter10} alt="Image" />
                                <h5>POSTMAN</h5>
                            </div>
                        </Carousel>
                        <p>Also, I have applied some packages into my projects such as Axios, Cloudinary, Mongoose, Bcrypt<br></br></p>
                        <p>Actually, I´m learning others languages as typescript and nest. The next knowledge to improve will be React with Next.JS<br></br></p>

                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}

export default Skills