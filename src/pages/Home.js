import React from "react";
import Banner from "../components/Banner.js";
import BannerImg from "../assets/banner_img.png";

const Home = () => {
    return (
        <div>
            <Banner bannerImg={BannerImg} />
        </div>
    );
};

export default Home;
