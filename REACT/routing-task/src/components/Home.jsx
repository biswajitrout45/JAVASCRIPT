import './Home.css';
import myphoto from './myphoto.jpg';
function Home(){
    return(
        <div className="container">
            <div className="image-stack">
                <img src={myphoto} alt="" className="img img1"/>
                <img src={myphoto} alt="" className="img img2"/>
                <img src={myphoto} alt="" className="img img3"/>
            </div>
            <div className="content">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil, laborum aliquid commodi accusamus vel sunt tempore, voluptatibus porro quia nostrum velit facere illo tenetur quae ab ipsam veritatis sapiente.
                Aut sed dolorem doloremque incidunt laudantium, repellat saepe sunt ratione in quisquam! Repellat eaque tenetur rem dolore odit, placeat quos provident cupiditate animi ab beatae ipsum molestiae voluptatem mollitia libero.
                Commodi expedita, ea, modi officia labore enim eveniet, repellendus amet quaerat asperiores laudantium earum? Aliquid distinctio consectetur error ea esse, dicta nobis facilis architecto, iusto natus aspernatur. Nostrum, aliquid inventore!
                </p>
            </div>
        </div>
    )
}
export default Home;