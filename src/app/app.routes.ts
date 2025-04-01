import { Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

// Path Không bắt đầu bằng nút / (slash)
export const routes: Routes = [
    {
        path: 'create', component: CreateComponent,
       
    },
    {
        path: '',component: ListComponent,
    },
    {
        path: 'edit/:id', component: EditComponent,
    },
    {
        path: 'signup', component: SignupComponent,
    },
    {
        path: 'signin', component: SigninComponent,
    },
    // Bắt Buộc phải nàm ở cuối
    {
        path: '**',
        component: NotFoundComponent,
    }
];
