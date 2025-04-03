import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // gắn link
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent { // khái báo biến khai báo hàm
  constructor (
    private auth: AuthServicesService,
  ){}
  ngOnInit() {
    this.getAll();
  }
  listProduct: any;
  getAll():void {
    this.auth.getAll().subscribe(res => {
      this.listProduct = res;
    })
  }
  onDelete(id:any) {
    this.auth.delete(id).subscribe(res => {
      if (res ) {
        alert('Xóa thành công !');
        this.getAll();
      }
    })
  }
}
