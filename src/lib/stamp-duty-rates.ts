export type Bracket = { min: number; max: number; base: number; rate: number };

export type StateConfig = {
  brackets: Bracket[];
  fhbExemptionThreshold: number;
  fhbConcessionMax: number;
  fhbConcessionCalc: (duty: number, value: number) => number;
};

function calcDuty(brackets: Bracket[], value: number): number {
  for (const b of brackets) {
    if (value <= b.max) {
      return b.base + (value - b.min) * b.rate;
    }
  }
  const last = brackets[brackets.length - 1];
  return last.base + (value - last.min) * last.rate;
}

export function getStampDuty(
  state: string,
  value: number,
  isFirstHomeBuyer: boolean,
  isInvestment: boolean
): { duty: number; concession: number } {
  const config = RATES[state];
  if (!config) return { duty: 0, concession: 0 };

  const duty = calcDuty(config.brackets, value);

  if (isFirstHomeBuyer && !isInvestment) {
    if (value <= config.fhbExemptionThreshold) {
      return { duty, concession: duty };
    }
    if (value <= config.fhbConcessionMax) {
      const concession = config.fhbConcessionCalc(duty, value);
      return { duty, concession: Math.min(concession, duty) };
    }
  }

  return { duty, concession: 0 };
}

const RATES: Record<string, StateConfig> = {
  NSW: {
    brackets: [
      { min: 0, max: 16000, base: 0, rate: 0.0125 },
      { min: 16000, max: 35000, base: 200, rate: 0.015 },
      { min: 35000, max: 93000, base: 485, rate: 0.0175 },
      { min: 93000, max: 351000, base: 1500, rate: 0.035 },
      { min: 351000, max: 1168000, base: 10530, rate: 0.045 },
      { min: 1168000, max: 3505000, base: 47295, rate: 0.055 },
      { min: 3505000, max: Infinity, base: 175850, rate: 0.07 },
    ],
    fhbExemptionThreshold: 800000,
    fhbConcessionMax: 1000000,
    fhbConcessionCalc: (duty, value) => duty * (1 - (value - 800000) / 200000),
  },
  VIC: {
    brackets: [
      { min: 0, max: 25000, base: 0, rate: 0.014 },
      { min: 25000, max: 130000, base: 350, rate: 0.024 },
      { min: 130000, max: 960000, base: 2870, rate: 0.06 },
      { min: 960000, max: 2000000, base: 52670, rate: 0.055 },
      { min: 2000000, max: Infinity, base: 110000, rate: 0.065 },
    ],
    fhbExemptionThreshold: 600000,
    fhbConcessionMax: 750000,
    fhbConcessionCalc: (duty, value) => duty * (1 - (value - 600000) / 150000),
  },
  QLD: {
    brackets: [
      { min: 0, max: 5000, base: 0, rate: 0 },
      { min: 5000, max: 75000, base: 0, rate: 0.015 },
      { min: 75000, max: 540000, base: 1050, rate: 0.035 },
      { min: 540000, max: 1000000, base: 17325, rate: 0.045 },
      { min: 1000000, max: Infinity, base: 38025, rate: 0.0575 },
    ],
    fhbExemptionThreshold: 500000,
    fhbConcessionMax: 550000,
    fhbConcessionCalc: (duty, value) => duty * (1 - (value - 500000) / 50000),
  },
  WA: {
    brackets: [
      { min: 0, max: 120000, base: 0, rate: 0.019 },
      { min: 120000, max: 150000, base: 2280, rate: 0.0285 },
      { min: 150000, max: 360000, base: 3135, rate: 0.038 },
      { min: 360000, max: 725000, base: 11115, rate: 0.0475 },
      { min: 725000, max: Infinity, base: 28453, rate: 0.0515 },
    ],
    fhbExemptionThreshold: 430000,
    fhbConcessionMax: 530000,
    fhbConcessionCalc: (duty, value) => duty * (1 - (value - 430000) / 100000),
  },
  SA: {
    brackets: [
      { min: 0, max: 12000, base: 0, rate: 0.01 },
      { min: 12000, max: 30000, base: 120, rate: 0.02 },
      { min: 30000, max: 50000, base: 480, rate: 0.03 },
      { min: 50000, max: 100000, base: 1080, rate: 0.035 },
      { min: 100000, max: 200000, base: 2830, rate: 0.04 },
      { min: 200000, max: 250000, base: 6830, rate: 0.0425 },
      { min: 250000, max: 300000, base: 8955, rate: 0.0475 },
      { min: 300000, max: 500000, base: 11330, rate: 0.05 },
      { min: 500000, max: Infinity, base: 21330, rate: 0.055 },
    ],
    fhbExemptionThreshold: 0,
    fhbConcessionMax: 0,
    fhbConcessionCalc: () => 0,
  },
  TAS: {
    brackets: [
      { min: 0, max: 3000, base: 50, rate: 0 },
      { min: 3000, max: 25000, base: 50, rate: 0.0175 },
      { min: 25000, max: 75000, base: 435, rate: 0.025 },
      { min: 75000, max: 200000, base: 1685, rate: 0.035 },
      { min: 200000, max: 375000, base: 6060, rate: 0.04 },
      { min: 375000, max: 725000, base: 13060, rate: 0.0425 },
      { min: 725000, max: Infinity, base: 27935, rate: 0.045 },
    ],
    fhbExemptionThreshold: 0,
    fhbConcessionMax: 600000,
    fhbConcessionCalc: (duty) => duty * 0.5,
  },
  ACT: {
    brackets: [
      { min: 0, max: 260000, base: 0, rate: 0.006 },
      { min: 260000, max: 300000, base: 1560, rate: 0.023 },
      { min: 300000, max: 500000, base: 2480, rate: 0.034 },
      { min: 500000, max: 750000, base: 9280, rate: 0.041 },
      { min: 750000, max: 1000000, base: 19530, rate: 0.0505 },
      { min: 1000000, max: 1455000, base: 32155, rate: 0.056 },
      { min: 1455000, max: Infinity, base: 57635, rate: 0.058 },
    ],
    fhbExemptionThreshold: 0,
    fhbConcessionMax: 1000000,
    fhbConcessionCalc: (duty) => duty,
  },
  NT: {
    brackets: [
      { min: 0, max: 525000, base: 0, rate: 0.0 },
      { min: 525000, max: 3000000, base: 0, rate: 0.0495 },
      { min: 3000000, max: 5000000, base: 122513, rate: 0.0575 },
      { min: 5000000, max: Infinity, base: 237513, rate: 0.0595 },
    ],
    fhbExemptionThreshold: 0,
    fhbConcessionMax: 0,
    fhbConcessionCalc: () => 0,
  },
};

// NT uses a different calculation method - override
const ntCalc = (value: number): number => {
  if (value <= 525000) {
    const v = value / 1000;
    return (0.06571441 * v * v) + 15 * v;
  }
  if (value <= 3000000) return (value - 525000) * 0.0495 + 23928.60;
  if (value <= 5000000) return (value - 3000000) * 0.0575 + 146303.60;
  return (value - 5000000) * 0.0595 + 261303.60;
};

export function getStampDutyNT(value: number): number {
  return ntCalc(value);
}
