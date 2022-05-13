import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Chart from 'chart.js';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { environment } from 'src/environments/environment';
import { OPENINGS } from './openings';
import { OPEN_POSITION_ACTIONS } from './openPositionActions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  openings: any = [];
  openPositionsActions = OPEN_POSITION_ACTIONS;
  stats;


  constructor(
    private router: Router,
    private referralService: ReferralService
    ) { }

  ngOnInit() {
    this.getAllOpenings();
    this.getReferralStats();
  }

  getReferralStats() {
    this.referralService.getReferralStats().subscribe(res => {
      this.stats = res;
    },
    err => {

    });
  }

  getAllOpenings() {
    this.referralService.getAllOpenings().subscribe(res => {
      this.openings = res;
      console.log('openings ', this.openings);
    },
    err => {

    });
  }

  navigateToPositionDetails(id) {
    this.router.navigate(['/view-job-posting'])
  }

  handleAction(action, opening) {
    const { slug } = action;
    if(slug === 'VIEW_OPENING_DETAILS') {
      this.router.navigate(['/view-job-posting/' + opening.jiraId], { state: opening })
    } else if(slug === 'EDIT_OPENING_DETAILS') {
      this.router.navigate(['/view-job-posting/' + opening.jiraId], { state: opening })
    }
    else {
      // EXTRACT OPENINGID FROM ROUTE
      // this.referralService.updateStatus(referral. , referral.referralId, slug).subscribe(res => {

      // },
      // err => {

      // });
    }
  }
  

}
