import './About.css';
import myphoto from './myphoto.jpg';
function About(){
    return(
        <div className="about"> 
            <h1>About Us</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum mollitia distinctio possimus iusto excepturi nam neque natus harum dolorem temporibus, sint necessitatibus eum, eos, commodi esse quia quod? Deleniti, expedita?
                Tempore vitae qui reprehenderit, illum ab nesciunt autem eveniet rerum dolor esse, ipsam pariatur aliquam perspiciatis placeat corrupti vel quasi, praesentium earum sequi commodi reiciendis cum adipisci officiis! Quae, cumque?
                 Voluptatum eaque corrupti, ratione nemo, laboriosam placeat facilis neque repellat laborum ea fugiat labore veritatis fugit? Repellat, praesentium, ratione repudiandae doloribus eveniet alias minima nesciunt soluta libero reprehenderit laudantium voluptatum.</p>
            <img src={myphoto} alt="" className="about-img"/>
        </div>
    )
}
export default About;