import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { MeetingSummaryComponent } from './meeting-summary/meeting-summary.component';
import { TagInputModule } from 'ngx-chips';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, FileUploadComponent, MeetingSummaryComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TagInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
