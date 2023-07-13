export function searchMyMovies(movies, search, checkboxValue, setResultSearchMyMovies, setNotFound) {
    const filteredMovies = movies.filter((card) =>
        Object.values(card).some((value) =>
            typeof value === "string" && value.toLowerCase().includes(search.toLowerCase())
        )
    );
    setResultSearchMyMovies(filteredMovies);

    setNotFound(false);
    if (checkboxValue) {
        const filteredMoviesLessThan40Mins = filteredMovies.filter((card) =>
            card.duration < 40
        );
        if (filteredMoviesLessThan40Mins.length === 0) {
            setNotFound(true);
        }
        setResultSearchMyMovies(filteredMoviesLessThan40Mins);
        setNotFound(false);
    }
    if (filteredMovies.length === 0) {
        setNotFound(true);
    }
}
