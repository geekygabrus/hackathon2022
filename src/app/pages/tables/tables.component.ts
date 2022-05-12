import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OPENINGS } from './openings';
import { OpeningsService } from './openings-service';
import { OPEN_POSITION_ACTIONS } from './openPositionActions';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent implements OnInit {

  // openPositions: any = OPENINGS;
  openPositionsActions = OPEN_POSITION_ACTIONS;

  constructor(private openingsService: OpeningsService, private router: Router) {
  }

  ngOnInit() {
    this.openingsService.getOpenings();
  }

  get openPositions() {
    return this.openingsService.openPositions;
  }

  get isLoading() {
    return this.openingsService.loading;
  }

  handleOpenignAction(action: string, jiraId: string) {
    if(action === 'view') {
      console.log("URL", `view-job-posting?opening-id=${jiraId}`);
      this.router.navigate([`view-job-posting?opening-id=${jiraId}`]);
    }
  }

}
