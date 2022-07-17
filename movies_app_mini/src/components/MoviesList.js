import React from "react";
import Movie from "./Movie"
import classes from './MoviesList.module.css'

const MoviesList = (props) => {

    const movies = <ul className={classes.movies}> {props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}</ul>;

    return <React.Fragment>
        {movies}
    </React.Fragment>
};

export default MoviesList;