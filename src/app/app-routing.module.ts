import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FileUploadComponent} from './file-upload/file-upload.component';
import {MeetingSummaryComponent} from './meeting-summary/meeting-summary.component';

const routes: Routes = [
  { path: "", component: FileUploadComponent },
  { path: "meetingSummary", component: MeetingSummaryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
