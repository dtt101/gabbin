const Wreck = require('wreck');

const genres = {
    'action': 28,
    'sci-fi': 878,
    'comedy': 35,
    'family': 10751,
    'drama': 18,
    'romance': 10749,
    'thriller': 53,
    'horror': 27,
    'documentary': 99
}

module.exports = {
    getMoviesForGenre(genre) {
        const genreCode = genres[genre.toLowerCase()];
        const url = 'https://api.themoviedb.org/3/discover/movie?with_genres=' + genreCode + '&sort_by=popularity.desc&vote_count.gte=10&api_key=' + process.env.MDB_API_KEY;
        return new Promise((resolve, reject) => {
            Wreck.get(
                url,
                {json: true},
                (err, res, payload) => {
                    return resolve(payload);
                }
            )
        });
    }
}