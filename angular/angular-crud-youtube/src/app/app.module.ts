import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreatedEmployeeComponent } from './employee/created-employee.component';

const appRoutes : Routes = [
  { path :'list',  component : ListEmployeeComponent},
  { path :'create', component : CreatedEmployeeComponent},
  { path :'', redirectTo : '/list', pathMatch:'full' }
]
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    CreatedEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
