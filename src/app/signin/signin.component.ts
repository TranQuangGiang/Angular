import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  imports: [FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(
    private api:HttpClient,
    private router:Router
  ){}

  apiUrl = `http://localhost:3000/login`
  onSignin(values:any):void { 
    this.api.post(this.apiUrl, values).subscribe(res => {
      if (res) {
        alert('Đăng nhập thành công !');
        this.router.navigate(['']);
      }
    })
  }
}
