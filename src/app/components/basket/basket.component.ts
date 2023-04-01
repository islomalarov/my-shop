import { Component, Input } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent {
  @Input() buy: any;
  constructor(public service: ServicesService){}
}
