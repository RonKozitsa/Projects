import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from '../Shared/Services/auth.service';
import { SharedModule } from '../Shared/shared.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  providers: [AuthService],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
})
export class AuthModule { }
