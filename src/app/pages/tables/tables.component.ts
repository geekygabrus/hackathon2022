import { Component, OnInit } from '@angular/core';
import { OPENINGS } from './openings';
import { OPEN_POSITION_ACTIONS } from './openPositionActions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  openPositions = OPENINGS;
  openPositionsActions = OPEN_POSITION_ACTIONS;

  constructor() { }

  ngOnInit() {
  }

}
