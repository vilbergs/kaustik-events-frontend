import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()

export class EventService {

    constructor(private http: Http) {}
    
    loadData() {
        return this.http.get('http://localhost:8000/api/load')
    }
    getEvents() {
        return this.http.get('http://localhost:8000/api/events')
            .map(
                (response: Response) => {
                    const data = response.json();
                    return data;
                }
            );
    }
}