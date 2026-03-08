import '../styles/Client.css'
import icon1 from '../assets/icon (1).svg'
import icon2 from '../assets/icon (2).svg'
import icon3 from '../assets/icon (3).svg'
import c1 from '../assets/1.svg'
import c2 from '../assets/2.svg'
import c3 from '../assets/3.svg'
import c4 from '../assets/4.svg'
import c5 from '../assets/5.svg'
import c6 from '../assets/6.svg'
import c7 from '../assets/7.svg'



function Client(){
    return(
        <section className="client">
            <div className="client-first">
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className='Client-second'>
                <img src={c1} alt="" />
                <img src={c2} alt="" />
                <img src={c3} alt="" />
                <img src={c4} alt="" />
                <img src={c5} alt="" />
                <img src={c6} alt="" />
                <img src={c7} alt="" />
            </div>
            <div className='client-third'>
                <h1>Manage your entire community <br/> in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className='client-fourth'>
                <div className="fourth-one">
                    <img src={icon1} alt="" />
                    <h3>Membership <br /> Organisations</h3>
                </div>
                <div className="fourth-second">
                    <img src={icon2} alt="" />
                    <h3>National <br /> Associations</h3>
                </div>
                <div className="fourth-third">
                    <img src={icon3} alt="" />
                    <h3>Clubs And <br /> Groups</h3>
                </div>
            </div>
        </section>
    )
}export default Client;