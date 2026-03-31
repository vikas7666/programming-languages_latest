import { Component } from '@angular/core';
import {FormControl, FormGroup,ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
// import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // commencted home component and loading from router outlet
  // imports: [RouterOutlet,ReactiveFormsModule,HeaderComponent,HomeComponent],
  imports: [RouterOutlet,ReactiveFormsModule,HeaderComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
title = 'vikas app.components.ts'

  constructor(){
   

  }

}
