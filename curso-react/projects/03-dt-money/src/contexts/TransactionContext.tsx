import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionContextProviderProps {
  children: ReactNode;
}

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt?: string;
}

interface CreateTransactionType {
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
}

interface TransactionContextType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createNewTransaction: (data: CreateTransactionType) => Promise<void>;
}

export const transactionContext = createContext({} as TransactionContextType);

export function TransactionContextProvider({
  children,
}: TransactionContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("transactions", {
      params: {
        _sort: "createdAt",
        _order: "desc",
        q: query,
      },
    });
    setTransactions(response.data);
    console.log(response.data);
  }

  async function createNewTransaction(data: CreateTransactionType) {
    const response = await api.post("/transactions", {
      ...data,
      createdAt: new Date(),
    });
    setTransactions((state) => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <transactionContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createNewTransaction,
      }}
    >
      {children}
    </transactionContext.Provider>
  );
}
