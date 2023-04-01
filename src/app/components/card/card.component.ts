import { Component, Input } from '@angular/core';
import { IItem } from 'src/app/models/model';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() item: IItem = {
    id: 0,
    model: '',
    name: '',
    price: 0,
    qty: 0,
    characteristics: '',
    cover: ""
  }
  constructor(public service: ServicesService) { }

}
