import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule,RouterOutlet,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginObj :Login

  constructor(private http: HttpClient, private router : Router){
    this.loginObj = new Login();
  }

  onLogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res:any) =>{
      if(res.result){
        alert('login successfully');
        this.router.navigateByUrl('/dashboard')
      }else{
        alert(res.message)
      }
    })
  }
}

// Creating interface
export class Login {
    EmailId: string;
    Password: string;
    constructor(){
      this.EmailId ='';
      this.Password ='';
    }
}

