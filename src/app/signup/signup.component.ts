import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor (
    private api:HttpClient,
    private router:Router,
  ){}
  apiUrl = `http://localhost:3000/register`;
  onSignup(values:any):void {
    this.api.post(this.apiUrl, values).subscribe(res => {
      if (res) {
        alert(`Đăng ký thành công !`);
        this.router.navigate(['./signin']);
      }
    })
  }
}
