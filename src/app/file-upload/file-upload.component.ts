import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  file: File | null = null; // Variable to store file
  fileContent: any = null;
  items = [];
  emails = '';

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit() {}

  // On file Select
  onChange(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.file = file;
      let reader = new FileReader();
      reader.onload = (event: any) => {
        this.fileContent = event.target.result;
      };
      reader.readAsText(this.file);
    }
  }

  onUpload() {
    console.log('===========');
    this.router.navigate(['/meetingSummary']);
  }

  public sendEmail() {
    console.log('===>', this.items);
    this.http
      .post(
        `http://apprunner.hk.hsbc/email-service/api/v1/send-email`,
        { to: this.items, subject: 'Mom', body: this.fileContent },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .subscribe(
        (data) => {
          console.log('Response from api:', data);
        },
        (error) => {
          console.log('error:', error);
        }
      );
  }

  public sendonConfluence() {
    console.log('===>', this.items);
    this.http
      .post(
        ``,
       {},
        { headers: { '' } }
      )
      .subscribe(
        (data) => {
          console.log('Response from api:', data);
        },
        (error) => {
          console.log('error:', error);
        }
      );
  }
}
