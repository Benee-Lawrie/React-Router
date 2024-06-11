import React from "react";
import mimi from "../assets/mimii.png";

const HomePage = () => {
    return(
    <section id="home">
        <div className="homecontent">
            <span className="hello">Hello,</span>
            <span className="hometext">I'm <span className="homename">Benedicta</span> <br/> Frontend Developer</span>
            <p className="homeparagraph">I am a skilled web designer  with experience in creating visually appealing and user-friendly websites</p>
            <button className="btn">Hire me</button>
        </div>
        <img src={mimi} alt="mimi" className="mimi" />
    </section>

    ) 
    
};

export default HomePage;