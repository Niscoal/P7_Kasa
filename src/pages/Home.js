import React from "react";
import Banner from "../components/Banner.js";
import BannerImg from "../assets/banner_img.png";
import Logements from "../data/logements.json";
import Thumb from "../components/Thumb.js";

const Home = () => {
    return (
        <div>
            <Banner bannerImg={BannerImg} />
            <div>
                {Logements.map((logement) => {
                    return <Thumb key={logement.id} details={logement} />;
                })}
            </div>
        </div>
    );
};

export default Home;
