import classes from './AddMovies.module.css';
import React, { useRef } from "react";

const AddMovies = (props) => {

    const titleRef = useRef('');
    const openingRef = useRef('');
    const releaseRef = useRef('');



    const submitHandler = (event) => {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            opening: openingRef.current.value,
            release: releaseRef.current.value,
        };

        props.onAdd(movie);

        titleRef.current.value = '';
        openingRef.current.value = '';
        releaseRef.current.value = '';
    }

    return <form onSubmit={submitHandler}>
        <div className={classes.control}>
            <label>Movie Title</label>
            <input ref={titleRef} id='title' type='text' />
        </div>
        <div className={classes.control}>
            <label>Opening text</label>
            <input ref={openingRef} id='opening' type='text' />
        </div>
        <div className={classes.control}>
            <label>Release date</label>
            <input ref={releaseRef} id='title' type='date' />
        </div>
        <div className={classes.action}>
            <button>Add Movie</button>
        </div>
    </form>
};

export default AddMovies;