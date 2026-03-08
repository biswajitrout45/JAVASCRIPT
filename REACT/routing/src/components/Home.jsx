import './Home.css';

function Home(){
    return(
        <div className="home-page">
            <h1>Welcome to the Home page</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus non provident quasi doloremque quis numquam. Obcaecati reiciendis dolor maiores saepe ut quos adipisci amet beatae, nesciunt perspiciatis quod qui harum!</p>
            <div className="home-content">
                <h2>
                    This is the home page content.
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dignissimos, dolores rerum, maiores porro illum ipsa officia corrupti nisi beatae doloremque minus temporibus. Alias repellendus maxime nisi fugiat dignissimos magnam.</p>
                <button className="btn">Explore</button>
                <div className="features">
                    <div className="feature">
                        <h3>Feature 1</h3>
                        <p>This is first feature </p>
                    </div>
                    <div className="feature">
                        <h3>Feature 2</h3>
                        <p>This is second feature </p>
                    </div>
                    <div className="feature">
                        <h3>Feature 3</h3>
                        <p>This is third feature </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;