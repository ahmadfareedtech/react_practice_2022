import { useCallback, useEffect, useState } from 'react';
import './App.css';
import AddMovies from './components/AddMovies';
import MoviesList from './components/MoviesList';

function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://react-http-22-24927-default-rtdb.firebaseio.com/movies.json');

      if (!response.ok) {
        throw new Error('Somethingn went wrong');
      }

      const data = await response.json();

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push(
          {
            id: key,
            title: data[key].title,
            opening: data[key].opening,
            release: data[key].release,
          }
        );
      }

      setMovies(loadedMovies);
      setIsLoading(false);

    } catch (err) {
      setError(true);
    }

  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const addMoviesHandler = async (movie) => {

    const response = fetch(
      'https://react-http-22-24927-default-rtdb.firebaseio.com/movies.json'
      , {
        method: 'POST',
        body: JSON.stringify(movie),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    const data = await (await response).json();

    console.log(data);
  }

  let content = <p>No Movies Found!!!</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (isLoading) {
    content = <p>Loading...</p>
  }

  if (error) {
    content = <p className='error_text'>Error loading movies</p>
  }

  return (
    <div className="App">
      <section>
        <AddMovies onAdd={addMoviesHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </div>
  );
}

export default App;
