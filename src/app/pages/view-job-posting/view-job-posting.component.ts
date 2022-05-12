import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-job-posting',
  templateUrl: './view-job-posting.component.html',
  styleUrls: ['./view-job-posting.component.scss']
})
export class ViewJobPostingComponent implements OnInit {

  openingDetails;

  constructor(private location: Location) { }

  ngOnInit() {
    this.openingDetails = this.location.getState();
  }

  getPostedOn(date) {
    return new Date(date).toLocaleDateString('en-US');
  }

  getClosingDate(date) {
    let postedDate = new Date(date);
    return new Date(postedDate.setMonth(postedDate.getMonth() + 1)).toLocaleDateString('en-US');
  }

}
