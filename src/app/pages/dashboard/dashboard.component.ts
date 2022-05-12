import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { OPENINGS } from './openings';
import { OPEN_POSITION_ACTIONS } from './openPositionActions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  openPositions = OPENINGS;
  openPositionsActions = OPEN_POSITION_ACTIONS;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateToPositionDetails(id) {
    this.router.navigate(['/view-job-posting'])
  }

}
