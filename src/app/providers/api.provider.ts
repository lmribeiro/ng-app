import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable()
export class ApiProvider {
	API_URL: string = "http://0.0.0.0:8787/api";

	constructor(private http: HttpClient) {}

	get(endpoint: string) {
		let url = this.API_URL + endpoint;
		return this.http.get(url);
	}

	post(endpoint: string, data: any) {
		let httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		};
		let url = this.API_URL + endpoint;
		return this.http.post(url, data, httpOptions);
	}

	put(endpoint: string, data: any) {
		let httpOptions = {
			headers: new HttpHeaders({'Content-Type': 'application/json'})
		};
		let url = this.API_URL + endpoint;
		return this.http.post(url, data, httpOptions);
	}

	delete(endpoint: string) {
		let url = this.API_URL + endpoint;
		return this.http.delete(url);
	}
}
