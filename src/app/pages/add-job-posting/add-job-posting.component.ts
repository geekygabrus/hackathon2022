import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ReferralService } from 'src/app/services/referral/referral.service';

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

  myForm: FormGroup;

  constructor(private referralService: ReferralService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      title: new FormControl(''),
      department: new FormControl(''),
      description: new FormControl(''),
      noOfOpenings: new FormControl(''),
      experience: new FormControl('')
    });
  }


  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value);

    let req = {
      jobProfile: form.value.title,
      department: form.value.department,
      experienceRange: form.value.experience,
      jobDesc: form.value.description,
      noOfOpenings: form.value.noOfOpenings
    }

    this.referralService.publishNewOpening(req).subscribe(
      res => {
        alert('Job published successfully');
      },
      err => {

      }
    )
  }

}
