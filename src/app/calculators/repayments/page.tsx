import type { Metadata } from "next";
import RepaymentsCalculatorClient from "./RepaymentsCalculator";

export const metadata: Metadata = {
  title: "Repayments Calculator",
  description:
    "Estimate your monthly mortgage repayments and total loan costs. Compare principal & interest vs interest-only across different loan terms.",
};

export default function RepaymentsPage() {
  return <RepaymentsCalculatorClient />;
}
