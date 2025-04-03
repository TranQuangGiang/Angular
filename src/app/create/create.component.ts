import { HttpClient } from '@angular/common/http'; // call api
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // làm việc với form
import { Router } from '@angular/router'; // điều hướng
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-create',
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  constructor(
    private auth:AuthServicesService,
    private router: Router
  ) {}

  onCreate(data:any):void { // data dữ liệu người dùng nhập vào form
    this.auth.create(data).subscribe(res => {
      if (res) {
        alert('Thêm mới thành công');
        this.router.navigate(['']);
      }
    })
  }
}
