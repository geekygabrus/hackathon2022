import { Component, OnInit } from '@angular/core';
import { ClientHttpService } from 'src/app/services/client-http.service';
import { OPENINGS } from './openings';
import { OPEN_POSITION_ACTIONS } from './openPositionActions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  openPositions: any = OPENINGS;
  openPositionsActions = OPEN_POSITION_ACTIONS;

  constructor(private http: ClientHttpService) {
  }

  ngOnInit() {
    this.http.getRequest('/referral/v1/openings').subscribe((res) => {
      this.openPositions = res;
    });
  }

}
