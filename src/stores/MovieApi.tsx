import axios from 'axios';
import { observable, computed } from 'mobx';


export default class MovieApi {
	
	api = "http://www.omdbapi.com/";
	
	@observable movieFound: any;
	
	@computed get movie() {
		return this.movieFound;
	}
	
	search(params) {
		let restParams = { ...params, apikey: 'a097c5c' };
		
		return axios
			.get(this.api, { params: restParams })
			.then(res => this.movieFound = res.data.Title ? res.data : null );
	}

}
