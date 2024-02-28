import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {

  
  constructor(private router:Router) {
  }

  navigate(){
    this.router.navigate(['/calculate'])
  }
}
