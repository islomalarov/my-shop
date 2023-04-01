import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public service: ServicesService){}
}
