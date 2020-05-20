import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


class Filmcard extends React.Component {
    render() {
        const cards = [];
        if (this.props.movies) {
            this.props.movies.forEach(element => {
                let name = element["show"]["name"];
                let img;
                if (element["show"]["image"])
                    img = element["show"]["image"]["medium"];
                else
                    img = "https://www.labaleine.fr/sites/default/files/image-not-found.jpg";
                cards.push(
                    <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                image={img}
                                title={name}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                );

            });
        }
        return (cards);

    }
}


export default Filmcard;