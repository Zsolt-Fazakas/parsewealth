import { serve } from "inngest/next";
import { inngest } from "@/lib/inngest/clients";
import {
  checkBudgetAlert,
  triggerRecurringTransactions,
  processRecurringTransactions,
  generateMonthlyReports,
} from "@/lib/inngest/functions";

export const { GET, POST, PUT } = serve({
  client: inngest,
  functions: [
    checkBudgetAlert,
    triggerRecurringTransactions,
    processRecurringTransactions,
    generateMonthlyReports,
  ],
});
