export interface InvestmentData {
  initialInvestment: number | any;
  annualInvestment: number | any;
  expectedReturn: number | any;
  duration: number | any;
}

export interface InvestmentResult {
  year?: number;
  interest?: number;
  valueEndOfYear?: number;
  annualInvestment?: number;
  totalInterest?: number;
  totalAmountInvested?: number;
}
