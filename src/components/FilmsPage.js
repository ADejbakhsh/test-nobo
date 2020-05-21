import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import FilmInfo from './FilmInfo.js';



export default function Filmpage() {
    const { id } = useParams();
    const [movieInfo, setMovieInfo] = React.useState([]);
    let toprint = [];
    useEffect(() => {

        fetch("https://cors-anywhere.herokuapp.com/https://api.tvmaze.com/shows/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setMovieInfo(result);
                }).catch((error) => {
                    console.log(error);
                })
    }, []);

    if (movieInfo !== undefined) {
        toprint.push( 
            <FilmInfo movieInfo={movieInfo} key="unique" ></FilmInfo>);
    }
    else
        toprint.push(<h1>all good {id}</h1>);

    return toprint
}