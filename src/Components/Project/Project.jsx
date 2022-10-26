import "./Project.css"
import React from 'react'
import Img1 from '../../assets/2022-10-26.png'
import Img2 from '../../assets/project2.png' 
import Img3 from '../../assets/project3.png' 
import Img4 from '../../assets/project4.png' 

export const Project = () => {
  return (
    <section id='projects'>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio__container">
            <article className="portfolio__items">
                <div className="portfolio__items-image">
                    <img src={Img1} alt="" />
                </div>
                <h3>BestBuys Clone Website</h3>
                <div className="portfolio__items-cta">
                    <a href="https://github.com/Piryanshu88/racial-squirrel-7776" className="btn" target='_blank'>Github</a>
                    <a href="https://coruscating-zabaione-3c9f3a.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
            </article>
            <article className="portfolio__items">
                <div className="portfolio__items-image">
                    <img src={Img2} alt="" />
                </div>
                <h3>Bath and Body Works Clone </h3>
                <div className="portfolio__items-cta">
                    <a href="https://github.com/Piryanshu88/Bath_and_Body_Works_Clone/tree/main/bath_body_works" className="btn" target='_blank'>Github</a>
                    <a href="https://startling-pegasus-d1ab05.netlify.app/#" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
            </article>
            <article className="portfolio__items">
                <div className="portfolio__items-image">
                    <img src={Img3} alt="" />
                </div>
                <h3>Amazon Prime Clone</h3>
                <div className="portfolio__items-cta">
                    <a href="" className="btn" target='_blank'>Github</a>
                    <a href="https://bejewelled-begonia-81ae1f.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
            </article>
            <article className="portfolio__items">
                <div className="portfolio__items-image">
                    <img src={Img4} alt="" />
                </div>
                <h3>Youtube Clone</h3>
                <div className="portfolio__items-cta">
                    <a href="" className="btn" target='_blank'>Github</a>
                    <a href="https://eloquent-tapioca-27104f.netlify.app/" className="btn btn-primary" target='_blank'>Live Demo</a>
                    </div>
            </article>
        </div>
    </section>
  )
}
