import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor (
    // private api:HttpClient, chuyển sang dùng service
    private auth:AuthServicesService,
    private router:Router,
  ){}

  onSignup(values:any):void {
    this.auth.signup(values).subscribe(res => { // gọi sang hàm signup trong services
      if (res) {
        alert(`Đăng ký thành công !`);
        this.router.navigate(['./signin']);
      }
    })
  }
}
