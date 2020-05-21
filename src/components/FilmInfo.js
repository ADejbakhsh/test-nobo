import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class FilmInfo extends React.Component {
    render() {
        /* Début css */
        const imgcss = {
            height: "350pt",
            width: "238pt"
        };

        const titlecss = {

        };

        const summarycss = {
            flexGrow: 1,
            marginLeft: "40pt",
            marginRight: "40pt",
            marginBottom: "15pt",
            marginTop: "15pt"
        };

        /* fin css */


        /* checking if data exist  */
        const movieInfo = this.props.movieInfo;
        let img;
        let summary;
        let genre = [];
        let premiered;
        let status;
        let rating;
        let country = "";

        if (movieInfo["image"])
            img = movieInfo["image"]["original"];
        else
            img = "https://www.labaleine.fr/sites/default/files/image-not-found.jpg"
        if (movieInfo["summary"])
            summary = movieInfo["summary"].replace(/(<([^>]+)>)/ig, "");
        else
            summary = "No summary available";
        if (movieInfo["genres"])
        {
            movieInfo["genres"].forEach(element => {
                genre.push(
                <Button variant="contained" color="secondary" key={element}> {element}</Button>
                );
                
            });
        }
        if (movieInfo["premiered"])
            premiered = "The show premiered the " + movieInfo["premiered"];
        else
            premiered = "We have no idea when the show started"
        if (movieInfo["status"])
            status = " and is currently " + movieInfo["status"] + ".\n";
        else
            status = " and it's maybe running? Honestly we have no idea.\n";
        if (movieInfo["rating"])
            rating = " It has rating of " + movieInfo["rating"]["average"];
        else
            rating = "We can't find any rating";
        if (movieInfo["network"])
            country = " and come from " + movieInfo["network"]["country"]["name"] + ".";
        else 
            country = " .";
        return (
            <Container>
                <img style={imgcss} src={img}></img>
                <Typography style={titlecss} variant="h5" >
                    {movieInfo["name"]}
                </Typography>
                <Typography style={summarycss} align="justify" variante="body1">
                    {summary}
                </Typography>
                {genre}
                <Typography style={summarycss} align="justify" variante="body1">
                {premiered + status + rating + country}
                </Typography>


            </Container>
        )
    }
}

export default FilmInfo;