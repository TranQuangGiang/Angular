import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent { // khái báo biến khai báo hàm
  title = 'Trần Quang Giang';
  count:number = 0;
  countClick(): number {
  this.count++; // tăng thêm 1 đơn vị
    return this.count+= 2; // dùng cộng thêm 2 đơn vị
  }
  // listStudents = [
  //   {
  //     id: "PH52177",
  //     ten: 'TranQuangGiang',
  //     mail: 'giangtqph52177@gmail.com',
  //     nganh: 'LTW',
  //     anh: 'https://png.pngtree.com/png-clipart/20220927/original/pngtree-presentation-office-sales-element-vector-design-png-image_8634564.png',
  //     diem: 10
  //   },
  //   {
  //     id: "PH52188",
  //     ten: 'Hoàng Trung Hiếu',
  //     mail: 'hieuhtph56666@gmail.com',
  //     nganh: 'LTW',
  //     anh: 'https://png.pngtree.com/png-clipart/20220927/original/pngtree-presentation-office-sales-element-vector-design-png-image_8634564.png',
  //     diem: 7
  //   },
  //   {
  //     id: "PH52153",
  //     ten: 'Bùi Hoàng Hiếu',
  //     mail: 'hieu@gmail.com',
  //     nganh: 'LTW',
  //     anh: 'https://png.pngtree.com/png-clipart/20220927/original/pngtree-presentation-office-sales-element-vector-design-png-image_8634564.png',
  //     diem: 4
  //   }
  // ]
}
