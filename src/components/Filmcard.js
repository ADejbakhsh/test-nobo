import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';


class Filmcard extends React.Component {
    render() {
        /* Début du Css */
        const cardcss = {
            margin: "20pt",
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
            width: '210pt',
            flexBasis: 'auto',
        };

        const titlecss = {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        };

        const containercss = {
            display: 'flex',
            flexGrow: 1,
            flexDirection: 'column',
            width: '30vw',
            minHeight: '0px',
            minWidth: '280px',
            maxHeight: '480px',
            maxWidth: '300px',
            textAlign: 'center',
            textDecoration: 'none',
        };

        /* Fin du css */
        const cards = [];
        if (this.props.movies) {
            this.props.movies.forEach(element => {
                let name = element["show"]["name"];
                let id = element["show"]["id"];
                let img;
                if (element["show"]["image"])
                    img = element["show"]["image"]["original"];
                else
                    img = "https://www.labaleine.fr/sites/default/files/image-not-found.jpg";
                cards.push(
                    
                    <Card style={cardcss} raised={true} key={id}>
                        <Link to={"/" + id} >
                        <CardActionArea style={containercss}>
                            <CardMedia
                                component="img"
                                image={img}
                                title={name}
                            />
                            <CardContent>
                                <Typography style={titlecss} gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        </Link>
                    </Card>
                );
            });
        }
        return (cards);

    }
}


export default Filmcard;