import React, { useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Filmecard from './Filmcard.js';


const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));



export default function Searchbar() {
    const classes = useStyles();
    const [searchInput, setSearchInput] = React.useState();
    const [apiBool, setApiBool] = React.useState(false)
    const [movies, setMovies] = React.useState([]);

    function handleChange(event) {
        setSearchInput(event.target.value);
        if (apiBool) {
            fetch("https://api.tvmaze.com/search/shows?q=" + event.target.value)
                .then(res => res.json())
                .then(
                    (result) => {
                        setMovies(result);
                    }).catch((error) => {
                        console.log(error);
            })
        }
    }

    /*  Les hook c'est pas encore ca 😒*/
    useEffect(() => {
        fetch("https://api.tvmaze.com/search/shows?q=test")
            .then(res => res.json())
            .then(
                (result) => {
                    setApiBool(true);
                    setMovies(result);
                }
            )
            .catch((error) => {
                setApiBool(false);
                console.log(error);
            })
    }, []);

    function showFilmCard(searchInput, apiBool, movies) {
        if (!apiBool)
            return <h3>API offline</h3>;
        return <Filmecard movies={movies}></Filmecard>;


    }

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField
                id="search"
                label="Search field"
                type="search"
                variant="outlined"
                value={searchInput}
                onChange={handleChange}
            />
            {showFilmCard(searchInput, apiBool, movies)}
        </form>
    );
}
