import React, {useEffect, useState} from 'react';
import '../../styles/PopularMovies.css';
import {mapApi} from "../../services";

export const Popular = () => {
    const [pictureApi, setPictureApi] = useState({});

    const playListShow = async () => {
        const data = await mapApi();
        console.log(data.data);
        setPictureApi(data.data.images);
    }

    return (
        <div className="popular-movies">
            <button onClick={playListShow}>test</button>
            <img src={pictureApi.blank}/>
        </div>
    );
}