import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
})
export class FileuploadComponent {
  fileName = '';
  ApiBaseUrl: string = environment.ApiBaseUrl;
  upload$: any;
  click: boolean = false;

  constructor(private http: HttpClient) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.fileName = file.name;

      const formData = new FormData();

      formData.append('file', file);

      this.upload$ = this.http.post(this.ApiBaseUrl + "api/orders", formData);

      this.upload$.subscribe();
    }
  }

  isClicked(){
    
  }
}
