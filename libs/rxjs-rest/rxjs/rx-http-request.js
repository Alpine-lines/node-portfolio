const RxHR = require('@akanass/rx-http-request').RxHR;
const map = require('rxjs/operators').map;
const mergeMap = require('rxjs/operators').mereMap;
const combineLatest = require('rxjs').combineLatest;

// API URL
const BASE_PATH = `https://maciejtreder.github.io/asynchronous-javascript`;

// GET Directors
const directors$ = RxHR.get(`${BASE_PATH}/directors/`, { json: true })
    .pipe(map(response => response.body));
directors$.subscribe(console.log);

// FIND Director ID
const directorId$ = directors$.pipe(
    map(directors => directors.find(director => director.name === 'Quentin Tarantino').id)
)
directorId$.subscribe(console.log);

// GET Movies for Director
const directorMovies$ = directorId$.pipe(
    mergeMap(id => {
        return RxHR.get(`${BASE_PATH}/directors/${id}/movies`, { json: true })
    }),
    map(response => response.body)
);
directorMovies$.subscribe(console.log);

// GET Movie Reviews and Calculate Average Rating
const getAverageScore = (movie) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.rating;
    return RxHR.get(`${BASE_PATH}/movies/${movie.id}/reviews`, { json: true })
        .pipe(
            map(response => response.body.reduce(reducer, 0) / response.body.length),
            map(response => { return { title: movie.title, averageScore: response } })
        )
};
const movieRatings$ = directorMovies$.pipe(
    mergeMap(movies => {
        const observables$ = [];
        movies.forEach(movie => observables$.push(getAverageScore(movie)));
        return combineLatest(observables$);
    })    
)
movieRatings$.subscribe(console.log);

// CALCULATE Highest Rated Movie
const best$ = movieRatings$.pipe(map(movies => movies.sort((m1, m2) => m2.averageScore - m1.averageScore)[0].title));
best$.subscribe(result => console.log(`The best movie by Quentin Tarantino is... ${result}!`));