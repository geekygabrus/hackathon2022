import { Component, OnInit } from '@angular/core';
import { OPEN_POSITION_ACTIONS } from './openPosition.actions';
import { REFERRALS } from './referrals';

@Component({
  selector: 'app-referrals',
  templateUrl: './referrals.component.html',
  styleUrls: ['./referrals.component.scss']
})
export class ReferralsComponent implements OnInit {

  referrals = REFERRALS;
  openPositionsActions = OPEN_POSITION_ACTIONS;

  constructor() { }

  ngOnInit() {
  }

}
