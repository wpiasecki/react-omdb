import MovieSearchStore from './MovieSearchStore';
import MovieApi from './MovieApi';
import axios from 'axios';


const simpsons = {"Title":"The Simpsons","Year":"1989–","Rated":"TV-14","Released":"17 Dec 1989","Runtime":"22 min","Genre":"Animation, Comedy","Director":"N/A","Writer":"James L. Brooks, Matt Groening, Sam Simon","Actors":"Dan Castellaneta, Nancy Cartwright, Harry Shearer, Julie Kavner","Plot":"The satiric adventures of a working-class family in the misfit city of Springfield.","Language":"English, Spanish, Albanian, French, Japanese, German, Russian, Hindi, Swahili, Italian, Swedish, Turkish, Cantonese, Mandarin, Hebrew, Arabic, Klingon, Bengali, Czech","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 168 wins & 302 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"324,401","imdbID":"tt0096697","Type":"series","totalSeasons":"30","Response":"True"};


jest.mock('axios');


it('gets simpsons movie', () => {

	axios.get.mockResolvedValue({ data: simpsons });
	
	const movieApi = new MovieApi();
	const movieSearchStore = new MovieSearchStore({ movieApi: movieApi });

	return movieSearchStore.search({ t: 'The Simpsons' }).then(() =>
		expect(movieApi.movieFound.Title).toEqual('The Simpsons')
	);

});
