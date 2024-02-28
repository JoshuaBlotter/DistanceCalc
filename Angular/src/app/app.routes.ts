import { Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
    { path: '', redirectTo: '/calculate' },
    { path:'/calculate', component: CalculatorComponent },
    { path: '/history', component: HistoryComponent }
];
