import { Directive, input, effect, inject, ElementRef, } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  isCompleted = input(false)
  el = inject(ElementRef)

  constructor() { }

  styleEffect = effect(() =>{
    if(this.isCompleted()){
      this.el.nativeElement.style.textDecoration = 'line-through';
    }else{
      this.el.nativeElement.style.textDecoration = 'none';
    }
  })
  
}
