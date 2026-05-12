import type { Metadata } from "next";
import StampDutyCalculatorClient from "./StampDutyCalculator";

export const metadata: Metadata = {
  title: "Stamp Duty Calculator",
  description:
    "Estimate stamp duty and upfront costs across all Australian states and territories. Includes first home buyer concessions.",
};

export default function StampDutyPage() {
  return <StampDutyCalculatorClient />;
}
