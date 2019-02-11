import axios from 'axios';
import { observable, computed } from 'mobx';


const backtothefuture = {"Title":"Back to the Future","Year":"1985","Rated":"PG","Released":"03 Jul 1985","Runtime":"116 min","Genre":"Adventure, Comedy, Sci-Fi","Director":"Robert Zemeckis","Writer":"Robert Zemeckis, Bob Gale","Actors":"Michael J. Fox, Christopher Lloyd, Lea Thompson, Crispin Glover","Plot":"Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.","Language":"English","Country":"USA","Awards":"Won 1 Oscar. Another 19 wins & 25 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.5/10"},{"Source":"Rotten Tomatoes","Value":"96%"},{"Source":"Metacritic","Value":"87/100"}],"Metascore":"87","imdbRating":"8.5","imdbVotes":"911,581","imdbID":"tt0088763","Type":"movie","DVD":"17 Dec 2002","BoxOffice":"$2,925,880","Production":"Universal Pictures","Website":"http://www.bttfmovie.com/","Response":"True"};

const simpsons = {"Title":"The Simpsons","Year":"1989–","Rated":"TV-14","Released":"17 Dec 1989","Runtime":"22 min","Genre":"Animation, Comedy","Director":"N/A","Writer":"James L. Brooks, Matt Groening, Sam Simon","Actors":"Dan Castellaneta, Nancy Cartwright, Harry Shearer, Julie Kavner","Plot":"The satiric adventures of a working-class family in the misfit city of Springfield.","Language":"English, Spanish, Albanian, French, Japanese, German, Russian, Hindi, Swahili, Italian, Swedish, Turkish, Cantonese, Mandarin, Hebrew, Arabic, Klingon, Bengali, Czech","Country":"USA","Awards":"Nominated for 1 Golden Globe. Another 168 wins & 302 nominations.","Poster":"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"8.7/10"}],"Metascore":"N/A","imdbRating":"8.7","imdbVotes":"324,401","imdbID":"tt0096697","Type":"series","totalSeasons":"30","Response":"True"};


export default class MovieApi {
	
	api = "http://www.omdbapi.com/";
	
	@observable movieFound: any = simpsons;
	
	@computed get movie() {
		return this.movieFound;
	}
	
	search(params) {
		console.log('movieapi params=', params);
		
		let restParams = { ...params, apikey: 'a097c5c' };
		
		axios
			.get(this.api, { params: restParams })
			.then(res => this.movieFound = res.data.Title ? res.data : null);
	}

}
