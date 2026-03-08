import '../styles/Know.css'
import learnimg from '../assets/learn.svg'
function Know(){
    return(
    <section className='know'>
        <div className='know-img'>
            <img src={learnimg} alt="" />
        </div>
        <div className='know-cont'>
            <h1>The unseen of spending three years at pixelgrade</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure iusto architecto aperiam vel porro qui, veritatis ipsam facere earum eligendi tempora eveniet nulla nemo dignissimos, culpa amet animi labore hic.
            Similique, rerum? Sed, excepturi? Iure error veritatis, ratione repellendus quisquam a, temporibus ad iste, ut sequi dignissimos! Neque voluptatum ipsum, dolore a eos error modi doloremque corporis saepe sit officia.
            Exercitationem nobis totam reprehenderit quidem accusamus ab sed molestias placeat aliquid sequi, culpa saepe, libero tenetur beatae corrupti incidunt deserunt impedit nihil. Architecto sunt odit cumque ratione incidunt sequi quo!
            </p>
            <button>Learn More</button>
        </div>
    </section>
)}
export default Know