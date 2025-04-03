import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    private auth:AuthServicesService,
    private router:Router
  ){}

  onSignin(values:any):void { 
    this.auth.signin(values).subscribe((res:any) => {
      // lấy token lưu vào localStorage
      localStorage.setItem("token", res.accessToken);
      alert('Đăng nhập thành công !');
      this.router.navigate(['']);
    })
  }
}
