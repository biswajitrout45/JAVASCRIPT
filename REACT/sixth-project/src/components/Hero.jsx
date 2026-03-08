import React from "react";
import './hero.css';

function Hero(){
   return(
    <section className="content">
        <div className="hero-content">
           <div className="part">
             <h1>Welcome to Website</h1>
            <h3>Welcome to Website</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />
               Laborum quas exercitationem pariatur ipsum voluptate quis,<br />
               unde earum a quos voluptas officiis! Voluptatum libero itaque <br />
               rerum cumque eius quas perferendis sunt?
            </p>
           </div>
            <button className="btn">Get Start</button>
        </div>
    </section>
   )
}
export default Hero;