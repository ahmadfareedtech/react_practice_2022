import classes from './Movie.module.css';

const Movie = (props) => {
    return <li className={classes.movie}>
        <div className={classes.title}>{props.movie.title}</div>
        <div className={classes.opening}>{props.movie.opening}</div>
        <div className={classes.release}>{props.movie.release}</div>
    </li>
};

export default Movie;