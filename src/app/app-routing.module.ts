import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDVDComponent } from './add-DVD/add-DVD.component';
import { DeleteDVDComponent } from './delete-DVD/delete-DVD.component';
import { EditDVDComponent } from './edit-DVD/edit-DVD.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DVDListComponent } from './DVD-list/DVD-list.component';

const routes: Routes = [
  { path: '', pathMatch:'full', redirectTo: 'login'},
  { path: 'registration', component:RegistrationComponent},
  { path: 'login', component:LoginComponent},
  { path: 'DVD-list', component:DVDListComponent},
  { path: 'add-DVD', component:AddDVDComponent},
  { path: 'edit-DVD/:id', component:EditDVDComponent},
  { path: 'delete-DVD', component:DeleteDVDComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
