import { useParams } from "react-router-dom";
import logements from "../data/logements.json";
import Carousel from "../components/Carousel.js";

const Logement = () => {
    let paramsId = useParams();

    const logement = logements.find((theOne) => theOne.id === paramsId.id);
    // utilisaiton de la destructuration:
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

    // console.log(logement);

    return (
        <div>
            <main>{logement.title}</main>
            <Carousel props={pictures} />
        </div>
    );
};

export default Logement;
