import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddJobPostingComponent } from 'src/app/pages/add-job-posting/add-job-posting.component';
import { ReferralsComponent } from 'src/app/pages/referrals/referrals.component';
import { ReferralDetailsComponent } from 'src/app/pages/referral-details/referral-details.component';
import { ReferralTableComponent } from 'src/app/pages/referral-table/referral-table.component';
import { ViewJobPostingComponent } from 'src/app/pages/view-job-posting/view-job-posting.component';
import { ComponentsModule } from 'src/app/components/components.module';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule,
    ReactiveFormsModule,
    ComponentsModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    AddJobPostingComponent,
    ViewJobPostingComponent,
    IconsComponent,
    ReferralsComponent,
    ReferralTableComponent,
    ReferralDetailsComponent
  ]
})

export class AdminLayoutModule {}
