import React from "react";
import UIDesign from "../assets/images-removebg-preview.png";
import web from "../assets/webpic.png";
import product from "../assets/productpic.png";

const AboutPage = () => {
    return(
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDesc">I am a skilled and passionate web developer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design and a keen eyes for detail. I am proficient in HTML, CSS, and Javascript. </span>
            <div className="skillbar">
                <img src={web} alt="" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>Web Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>   
            </div>
            <div className="skillbar">
                <img src={UIDesign} alt="" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={product} alt="" className="skillbarimg"/>
                <div className="skillbartext">
                    <h2>Product Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div> 
            </div>
        </section>

    ) 
    
};

export default AboutPage;