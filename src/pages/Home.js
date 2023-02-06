import React from "react";
import { Navigate } from "react-router-dom";
import Banner from "../components/Banner.js";
import BannerImg from "../assets/banner_img.png";
import Logements from "../data/logements.json";
import Thumb from "../components/Thumb.js";

const Home = () => {
    try {
        return (
            <div>
                <Banner
                    bannerImg={BannerImg}
                    alt="banner : forest and sea"
                    text0="Chez vous,"
                    text1=" partout et ailleurs"
                />
                <main className="thumbsLayout">
                    {/* display a Thumbnail for each logement object ; details is a prop */}
                    {Logements.map((logement) => {
                        return <Thumb key={logement.id} details={logement} />;
                    })}
                </main>
            </div>
        );
    } catch {
        return <Navigate to="/notFound"></Navigate>;
    }
};

export default Home;
