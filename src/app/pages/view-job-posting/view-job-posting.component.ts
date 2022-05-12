import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OpeningsService } from '../tables/openings-service';

@Component({
  selector: 'app-view-job-posting',
  templateUrl: './view-job-posting.component.html',
  styleUrls: ['./view-job-posting.component.scss']
})
export class ViewJobPostingComponent implements OnInit {

  openingId: any = '';
  constructor(private route: ActivatedRoute, private openingsService: OpeningsService) { }

  ngOnInit() {
    this.openingId = this.route.snapshot.queryParamMap.get('opening-id');
    this.openingsService.getOpenings();
  }

  get getOpeningData() {
    if(this.openingsService.openPositions.length && this.openingId) {
      return this.openingsService.openPositions.find(item => item.jiraId === this.openingId);
    }
    return '';
  }

}
