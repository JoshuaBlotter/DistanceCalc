import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent implements OnInit {

  constructor(private router:Router) {
  }
  
  ngOnInit() {}


  navigate(){
    this.router.navigate(['/calculate'])
  }
}
