import { Component,signal } from '@angular/core';
import { GreetingComponent} from '../greeting/greeting.component';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  // databinding passing data from parent to child in this case home to
  homeMessage =  signal('hello World from home')

  // how to know which key ws pressed
  keyUpHandler(event: KeyboardEvent){
    console.log(`user Pressed ', ${event.key} key`)
  }
}

