import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { calculateInvestmentResults } from '../../investment-results';
import { InvestmentData } from '../investment-result/investment-result.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  @Output() data = new EventEmitter<InvestmentData>();

  initialInvestment: number | null = null;
  annualInvestment: number | null = null;
  expectedReturn: number | null = null;
  duration: number | null = null;

  onSubmit() {
    const data: InvestmentData = {
      initialInvestment: this.initialInvestment,
      annualInvestment: this.annualInvestment,
      expectedReturn: this.expectedReturn,
      duration: this.duration,
    };

    this.data.emit(data)
  }
}
