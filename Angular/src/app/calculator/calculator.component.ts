import { Component } from '@angular/core';

import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, MatRadioModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {

  chosenMetric: string = 'Miles';
  metrics: string[] = ['Miles', 'Kilometers', 'Both'];

  constructor(private router:Router) {
  }

  navigate(){
    this.router.navigate(['/history']);
  }
}
