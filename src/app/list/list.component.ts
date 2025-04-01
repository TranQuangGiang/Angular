import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; // gắn link

@Component({
  selector: 'app-list',
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent { // khái báo biến khai báo hàm
  constructor(private api:HttpClient) {} // thực thi ngay khi khởi tạo component
  
  ngOnInit():void {
    this.getList();
  } 
  apiURL:string = 'http://localhost:3000/product';
  ListProducts:any;
  getList():void {
    this.api.get(this.apiURL).subscribe(res => {
      console.log(res);
      // gán giá trị cho ListProducts
      this.ListProducts = res;
    });
  }
  onDelete (id:number) {
    if (confirm("Bạn chắc chứ ?")) {
      this.api.delete(`${this.apiURL}/${id}`).subscribe(res => {
        alert("Xóa thành công !");
        this.getList();
      })
    }
  }
}
