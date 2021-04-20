import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class WebitHomepageService {

    constructor(private http: HttpClient) {}

    getMovments() {
        const route = 'https://webitapimanagment.azure-api.net/awaiting';
        return this.http.request('GET', route)
    }

}