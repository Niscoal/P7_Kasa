import React from "react";
import { Navigate, useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel.js";
import Tags from "../components/Tags.js";
import Collapse from "../components/Collapse.js";

const Logement = () => {
    try {
        let paramsId = useParams();
        const logement = logements.find((theOne) => theOne.id === paramsId.id);

        // utilisation de la destructuration:
        const {
            id,
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
                <Carousel props={pictures} />
                <div>
                    <div className="logement__description--left">
                        <div>{title}</div>
                        <div>{location}</div>
                        <Tags keywords={tags} />
                    </div>
                    <div className="logement__description-right">
                        <div>
                            <span>{host.name}</span>
                            <img src={host.picture} />
                        </div>
                        <div>{rating}</div>
                    </div>
                </div>
                <div>
                    <Collapse
                        collapseTitle="Description"
                        collapseContent={description}
                    />
                    <Collapse
                        collapseTitle="Équipements"
                        collapseContent={equipments}
                    />
                </div>
            </main>
        );
    } catch {
        return <Navigate to="/notFound" />;
    }
};

export default Logement;
