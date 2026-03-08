import '../styles/Site.css'
import siteimg from '../assets/pana.svg'
function Site(){
    return(
        <section className="site">
            <div className='site-img'>
                <img src={siteimg} alt="" />
            </div>
            <div className='site-cont'>
                <h1>How to design your site footer like we did</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae nam odio nihil numquam eum, accusantium earum modi quo magnam, rerum eos. Assumenda, corrupti. Mollitia repudiandae dolorem numquam sint perspiciatis.
                Ab non autem nostrum? Neque quia, quas odit maiores qui veritatis. Deserunt impedit delectus hic nostrum velit nulla eum nesciunt, reiciendis illo cumque voluptatem amet doloremque recusandae vero, perspiciatis culpa.
                Consequuntur pariatur quam, atque dignissimos unde ad, quis voluptates repellendus commodi incidunt vitae blanditiis expedita maiores voluptatibus ab hic ea fugiat eaque consectetur cumque itaque maxime dicta? Laboriosam, aperiam iusto.
                Aliquam dicta architecto, harum quam, laboriosam nemo facilis voluptatem eveniet recusandae deleniti ipsam. Provident quaerat architecto ad labore ab, quam necessitatibus nihil sit voluptatum exercitationem consequatur quasi rerum saepe vero.</p>
                <button>Learn More</button>
            </div>
        </section>
    )
}export default Site;