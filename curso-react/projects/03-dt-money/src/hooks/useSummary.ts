import { transactionContext } from "../contexts/TransactionContext";
import { useContextSelector } from "use-context-selector";

export function useSummary() {
  const transactions = useContextSelector(transactionContext, (contexto) => {
    return contexto.transactions;
  });

  const summary = transactions.reduce(
    (accum, transaction) => {
      if (transaction.type === "income") {
        accum.income += transaction.price;
        accum.total += transaction.price;
      } else {
        accum.outcome += transaction.price;
        accum.total -= transaction.price;
      }

      return accum;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return { summary };
}
