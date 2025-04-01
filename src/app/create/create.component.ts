import { HttpClient } from '@angular/common/http'; // call api
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // làm việc với form
import { Router } from '@angular/router'; // điều hướng

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private api:HttpClient,
    private router: Router
  ) {}

  apiURL = 'http://localhost:3000/product'
  onCreate(data:any):void { // data dữ liệu người dùng nhập vào form
    this.api.post(this.apiURL, data).subscribe(res => {
      if (res) {
        alert('Thêm mới thành công');
        this.router.navigate(['']);
      }
    })
  }
}
