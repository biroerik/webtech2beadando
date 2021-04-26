import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DVDListComponent } from './DVD-list/DVD-list.component';
import { LoginComponent } from './login/login.component';
import { UserService } from './services/user.service';
import { DVDService } from './services/DVD.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDVDComponent } from './add-DVD/add-DVD.component';
import { EditDVDComponent } from './edit-DVD/edit-DVD.component';
import { DeleteDVDComponent } from './delete-DVD/delete-DVD.component';

@NgModule({
  declarations: [
    AppComponent,
    DVDListComponent,
    LoginComponent,
    RegistrationComponent,
    AddDVDComponent,
    EditDVDComponent,
    DeleteDVDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService, DVDService],
  bootstrap: [AppComponent]
})
export class AppModule { }
