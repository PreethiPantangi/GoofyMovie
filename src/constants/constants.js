export function getApiKey() {
    return "80ba168b92a6d9e727033838c5905b4b";
}

export function getGenreListUrl() {
    return `https://api.themoviedb.org/3/genre/movie/list?api_key=${getApiKey()}`
}

export function getMovieByGenreIdUrl(genreId) {
    return `https://api.themoviedb.org/3/genre/${genreId}/movies?api_key=${getApiKey()}`
}

export function getImageUrl(size) {
    return `https://image.tmdb.org/t/p/w${size}/`
}

export function getMovieInfoUrl(movieId) {
    return `https://api.themoviedb.org/3/movie/${movieId}?api_key=${getApiKey()}&language=en-US`
}


export function getCreditsUrl(movieId) {
    return `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${getApiKey()}`
}