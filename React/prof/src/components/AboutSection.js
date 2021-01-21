import home1  from '../img/home1.png';
const AboutSection=()=>{
    return (
        <div>
            <div className="decription">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="home1"/>
            </div>
        </div>
    )
}
export default AboutSection;
