import { Component, OnInit } from '@angular/core';
import { REFERRAL_ACTIONS } from '../referrals/referral.actions';
import { REFERRALS } from '../referrals/referrals';
import { OPEN_POSITION_ACTIONS } from '../dashboard/openPositionActions';
import { ReferralService } from 'src/app/services/referral/referral.service';
import { Router } from '@angular/router';
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

  constructor(private referralService: ReferralService,
    private router: Router) { }

  ngOnInit() {
    this.loading = true;
    this.referralService.getAllReferrals().subscribe(res => {
      console.log(res);
      this.loading = false;
      this.referrals = res;
    },
    err => {
      this.loading = false;
    }
    )
  }

  navigateToJobOpening(referralId) {
    window.open(environment.JIRA_BASE_URL + referralId, '_blank');
    // this.rou
  }

}
