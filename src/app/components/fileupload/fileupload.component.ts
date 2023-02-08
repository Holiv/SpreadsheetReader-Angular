import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DeleteOrdersServiceService } from 'src/app/services/delete-orders.service';
import { FileUploadService } from 'src/app/services/file-upload.service';
import { OrdersService } from 'src/app/services/orders.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css'],
})
export class FileuploadComponent implements OnInit{
  fileName = '';
  ApiBaseUrl: string = environment.ApiBaseUrl;
  loading: boolean = false;
  file: any = null;
  event: any = null;
  clean: boolean = false;

  constructor(private fileUploadService: FileUploadService, private getfilesService: OrdersService, private deleteAllOrders: DeleteOrdersServiceService) {}

  // onFileSelected(event: any) {
  //   const file: File = event.target.files[0];

  //   if (file) {
  //     this.fileName = file.name;

  //     const formData = new FormData();

  //     formData.append('file', file);

  //     this.upload$ = this.http.post(this.ApiBaseUrl + "api/orders", formData);

  //     this.upload$.subscribe();
  //   }
  // }
  ngOnInit() {
    this.getfilesService.getAllOrders().subscribe({
      next: (event) => {
        if(event.length > 0){
          this.event = true;
          this.clean = true;
        }
      }
    });
  };

  onChange(event: any) {
    console.log(typeof(event));
    console.log(event)
    this.file = event.target.files[0];
  }

  onUpload(){
    this.loading = !this.loading;
    console.log(this.file);

    this.fileUploadService.upload(this.file).subscribe({
      next: (e) => {
        if (typeof (e) === 'object'){
          this.loading = false;
          this.event = e;
          this.clean = !this.clean;
        }
      },
      error: (response) => {
        console.log(response)
      }
    });
  };

  onClean(){
    this.deleteAllOrders.deleteAllOrders();
    this.event = !this.event;
    this.clean = !this.clean;
  }
};
