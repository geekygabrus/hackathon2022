import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-job-posting',
  templateUrl: './add-job-posting.component.html',
  styleUrls: ['./add-job-posting.component.scss']
})
export class AddJobPostingComponent implements OnInit {

  locations = [
    {
      id: 1,
      label: 'Gurugram'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onLocationSelected($event) {
    
  }

}
