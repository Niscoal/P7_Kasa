import React from "react";
import Banner from "../components/Banner";
import about_banner_img from "../assets/about_banner_img.png";
import Collapse from "../components/Collapse";
import about from "../data/about.json";

const About = () => {
    return (
        <div>
            <Banner bannerImg={about_banner_img} alt="Banner : moutains" />
            <main className="collapseContent--about">
                {about.map((worth, index) => {
                    return (
                        <Collapse
                            key={index}
                            collapseTitle={worth.title}
                            collapseContent={worth.text}
                            collapseSize="collapseBig"
                        />
                    );
                })}
            </main>
        </div>
    );
};

export default About;
