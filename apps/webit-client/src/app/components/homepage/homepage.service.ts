import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable()
export class HomepageService {

    constructor(private http: HttpClient) {}

    getAwaitingMovments() {
        const route = 'https://webitapimanagment.azure-api.net/awaiting';
        return this.http.request('GET', route)
    }
  getCompletedMovments() {
    const route = 'https://webitapimanagment.azure-api.net/completed';
    return this.http.request('GET', route)
  }

}
