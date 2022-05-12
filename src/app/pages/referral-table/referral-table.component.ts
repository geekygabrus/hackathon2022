import { Component, OnInit } from '@angular/core';
import { REFERRAL_ACTIONS } from '../referrals/referral.actions';
import { REFERRALS } from '../referrals/referrals';
import { OPEN_POSITION_ACTIONS } from '../tables/openPositionActions';

@Component({
  selector: 'app-referral-table',
  templateUrl: './referral-table.component.html',
  styleUrls: ['./referral-table.component.scss']
})
export class ReferralTableComponent implements OnInit {

  referrals = REFERRALS;
  referralActions = REFERRAL_ACTIONS;

  constructor() { }

  ngOnInit() {
  }

}
