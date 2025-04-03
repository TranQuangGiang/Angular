import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; // lấy parmas truyền trên url
import { FormsModule } from '@angular/forms';
import { AuthServicesService } from '../services/auth-services.service';

@Component({
  selector: 'app-edit',
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor (
    private auth:AuthServicesService,
    private router:Router,
    private actRouter:ActivatedRoute,
  ) {}
  productOne:any ;
  id:number = 0;
  ngOnInit() {  
    const id = this.actRouter.snapshot.params['id'];
    this.getDetail(id);
  }
  
  getDetail(id:any):void {
    this.auth.getOne(id).subscribe(res => {
      this.productOne = res;
    })
  }
  onEdit(values:any):void{
    const id = this.actRouter.snapshot.params['id'];
    this.auth.update(`${id}`, values).subscribe(res => {
      if (res ) {
        alert("Cập nhập thành công !");
        this.router.navigate(['']);
      }
    })
  }
  
}
