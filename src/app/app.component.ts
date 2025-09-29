import { Component, Input } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentResultComponent } from './investment-result/investment-result.component';
import {
  InvestmentData,
  InvestmentResult,
} from './investment-result/investment-result.model';
import { calculateInvestmentResults } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserInputComponent, InvestmentResultComponent],
})
export class AppComponent {
  finalData: InvestmentResult[] = [];

  onSubmit(investmentData: InvestmentData) {
    this.finalData = calculateInvestmentResults(investmentData);
  }
}
