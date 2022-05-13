import { Component, OnInit } from '@angular/core';
import { REFERRAL_ACTIONS } from './referral.actions';
import { REFERRALS } from '../referrals/referrals';
import { OPEN_POSITION_ACTIONS } from '../dashboard/openPositionActions';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-referral-table',
  templateUrl: './referral-table.component.html',
  styleUrls: ['./referral-table.component.scss']
})
export class ReferralTableComponent implements OnInit {

  referrals : any = [];
  referralActions = REFERRAL_ACTIONS;
  loading = false;
  openingId;

  constructor(private referralService: ReferralService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( paramMap => {
      this.openingId = paramMap.get('openingId');
      this.getReferralById();
  });
  }

  getReferralById() {
    this.loading = true;
    this.referralService.getReferralById(this.openingId).subscribe(res => {
      console.log(res);
      this.loading = false;
      this.referrals = res;
    },
    err => {
      this.loading = false;
    }
    );
  }

  navigateToJobOpening(referralId) {
    window.open(environment.JIRA_BASE_URL + referralId, '_blank');
  }

  handleAction(action, referral) {
    const { slug } = action;
    if(slug === 'OPEN_JIRA') {
      window.open(environment.JIRA_BASE_URL + referral.referralId, '_blank');
    } else if(slug === 'VIEW_RESUME') {
      window.open(referral.resumeURL, '_blank');
    }
    else {
      // EXTRACT OPENINGID FROM ROUTE
      this.referralService.updateStatus(this.openingId , referral.referralId, slug).subscribe(res => {
        this.getReferralById();
      },
      err => {

      });
    }
  }

}
