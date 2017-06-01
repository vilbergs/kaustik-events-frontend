import { Component } from '@angular/core';

import { Response } from '@angular/http';

import { EventService } from './event.service';

import $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  events = [];
  selectedEvent = {};

  constructor(private eventService: EventService) {}
  
  ngOnInit() {
    this.eventService.loadData().subscribe();

    this.eventService.getEvents().subscribe(
      (events: any[]) => this.events = events,
      (error) => console.log(error)
    );
  }

  onRowDetails(event) {
    this.selectedEvent = event;
  }
}
