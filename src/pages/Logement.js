import React from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel.js";
import Tags from "../components/Tags.js";
import Collapse from "../components/Collapse.js";
import Rating from "../components/Rating";

const Logement = () => {
    try {
        let paramsId = useParams(); // paramsId is an object with the current ID
        const logement = logements.find((theOne) => theOne.id === paramsId.id);
        // Find the "logement" object corresponding to the ID passed in the URL

        // destructuration:
        const {
            title,
            pictures,
            description,
            host,
            rating,
            location,
            equipments,
            tags,
        } = logement;

        return (
            <main>
                <Carousel slide={pictures} altName={title} />
                <div className="description">
                    <div className="description__left">
                        <h1>{title}</h1>
                        <h2>{location}</h2>
                        <Tags keywords={tags} />
                    </div>
                    <div className="description__right">
                        <div className="host__informations">
                            <span>{host.name}</span>
                            <img src={host.picture} alt="Host" />
                        </div>
                        <Rating base={5} note={Number(rating)} />
                        {/* define a base if rating basis change */}
                    </div>
                </div>
                <div className="collapseContent">
                    <Collapse
                        collapseTitle="Description"
                        collapseContent={description}
                        collapseSize="collapseSmall"
                    />
                    <Collapse
                        collapseTitle="Équipements"
                        collapseContent={equipments}
                        collapseSize="collapseSmall"
                    />
                </div>
            </main>
        );
    } catch {
        return <Navigate to="/notFound" />;
    }
};

export default Logement;
