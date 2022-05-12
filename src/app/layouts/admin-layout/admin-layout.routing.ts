import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { AddJobPostingComponent } from 'src/app/pages/add-job-posting/add-job-posting.component';
import { ReferralsComponent } from 'src/app/pages/referrals/referrals.component';
import { ReferralDetailsComponent } from 'src/app/pages/referral-details/referral-details.component';
import { ViewJobPostingComponent } from 'src/app/pages/view-job-posting/view-job-posting.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'add-job-posting', component: AddJobPostingComponent },
    { path: 'view-job-posting', component: ViewJobPostingComponent },
    { path: 'referrals', component: ReferralsComponent },
    { path: 'referral-details', component: ReferralDetailsComponent },
    { path: 'icons', component: IconsComponent }
];
