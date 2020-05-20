import React,  { useEffect } from 'react';
import { useParams } from 'react-router';





export default function Searchbar() {
    
    const { id } = useParams();
    const [movieInfo, setMovieInfo] = React.useState([]);

    useEffect(() => {

        fetch("https://api.tvmaze.com/search/shows/" + id)
            .then(res => res.json())
            .then(
                (result) => {
                    setMovieInfo(result);
                }).catch((error) => {
                    console.log(error);
                })
    }, []);


    /* 
        image (si ya)
        nom
        country (si ya)
        genre (si il y a)
        status
        anné de debut
        rating (si ya)
        summary
     */

    return <h1>all good {id}</h1>
}