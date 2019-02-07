import axios from 'axios';
import { computed } from 'mobx';


export default class MovieApi {
	
	api = "http://www.omdbapi.com/";
	
	movieList = [
		{ id: 1, title: 'back to the future 1' }
	];
	
	@computed get movies() {
		return this.movieList;
	}
	
	search(params) {
		console.log('movieapi params=', params);
		this.movieList = [ ...this.movieList, { id: 2, title: 'back to the future 2' } ];
		
		let restParams = { ...params, apikey: 'a097c5c' };
		
		axios
			//.get(this.api, { params: restParams })
			//.then(movies => this.movieList = this.movieList.concat(movies));
			//.then(res => console.log(res, params) );
	}

}
