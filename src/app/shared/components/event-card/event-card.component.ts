import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

  cardId!: any;
  events!: Observable<any>;

  constructor(private eventsService: EventsService) { }

  ngOnInit(): void {
    this.events = this.eventsService.getAll();
  }

  openSelectedCard(id: number){
    this.cardId = id;
  }

  closeSelectedCard(){
    this.cardId = null;
  }

}
