import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  ApiBaseUrl: string = environment.ApiBaseUrl;

  constructor(private http: HttpClient) {}
 
  upload(file: any): Observable<any> {
    
    const formData = new FormData();

    formData.append('file', file, file.name);

    return this.http.post(this.ApiBaseUrl + "api/orders", formData);
  }
}
