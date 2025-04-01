import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // lấy parmas truyền trên url
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor ( 
    private actRouter: ActivatedRoute,
    private api:HttpClient,
    private router:Router
  ) {}
  ngOnInit():void {
    const id = this.actRouter.snapshot.params['id'];
    if (id) {
      this.getDetail(id);
    }
  }
  apiURL = ' http://localhost:3000/product';
  product:any = {};
  getDetail(id:number):void {
    this.api.get(`${this.apiURL}/${id}`).subscribe(res => {
      if (res) {
        this.product = res;
      }
    })
  }
  onEdit(data:any):void {
    const id = this.actRouter.snapshot.params['id'];
    this.api.put(`${this.apiURL}/${id}`, data).subscribe(res => {
      if (res) {
        alert('Cập nhập thành công !');
        this.router.navigate(['']);
      }
    })
  }
  
 
}
