import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import Shaping from "../Layout/Shaping";
import ErrorPage from "./ErrorPage";
import Collapse from '../Components/Collapse';
import Carousel from '../Components/Carousel';

import Stars from '../Components/Stars';
import Tags from '../Components/Tags';

import "../Styles/Card.scss";
import records from "../Datas/logements.json";

function Card() {
    const [searchParams] = useSearchParams();
    const [idLogement] = useState(searchParams.get('_id'));

    const record = records.find(element => element.id === idLogement);

    if (!record) return(<ErrorPage />);

    const equipements = record.equipments.map((element, index) => (
        <li className='description-content' key={"equip-"+index.toString()}>{element}</li>
    ));

    return (
        <div className='logement'>
            <Shaping>
                <Navbar />

                {/* Carousel */}
                <Carousel pictures={record.pictures} />

                {/* Logement description */}
                <div className='ficheLogement'>
                    <div className='div-description'>
                        <h1>{record.title}</h1>
                        <h4>{record.location}</h4>
                        {/* Utilisation du composant Tags */}
                        <Tags tags={record.tags} />
                    </div>

                    {/* Stars and host info */}
                    <div className='bloc-stars'>
                        <div className='div-etoiles'>
                            <p>{record.host.name}</p>
                            <img src={record.host.picture} alt={record.title} />
                        </div>
                        
                        {/* Utilisation du composant Stars */}
                        <Stars rating={parseInt(record.rating)} />
                    </div>
                </div>

                {/* Collapsible sections */}
                <div className='collapseLogement'>
                    <Collapse title="Description" content={<div className="description-content">{record.description}</div>} />
                    <Collapse title="Equipements" content={<div className="equipements-content">{equipements}</div>} />
                </div>

            </Shaping>
            <Footer />
        </div>
    );
}

export default Card;
