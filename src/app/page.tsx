'use client';

import ExpenseTask from "@/app/components/ExpenseTask";
import { Task } from "@/app/types/Task";
import { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE } from "@/app/graphql/mutations";
import { GET_EXPENSES } from "@/app/graphql/queries";
import Expense from "@/app/components/Expense";
import { useWebSockets } from "@/app/hooks/useWebSockets";

export default function Home() {
  const [expenses, setExpenses] = useState<Task[]>([]);
  const socket = useWebSockets();

  const { data, loading, error, refetch } = useQuery(GET_EXPENSES, { notifyOnNetworkStatusChange: true });
  const [addExpenseMutation] = useMutation(ADD_EXPENSE);
  const [updateExpenseMutation] = useMutation(UPDATE_EXPENSE);
  const [deleteExpenseMutation] = useMutation(DELETE_EXPENSE);

  // Sync with GraphQL on load or refetch
  useEffect(() => {
    if (data && data.expenses) {
      setExpenses(data.expenses);
    }
  }, [data]);

  // WebSocket real-time updates
  useEffect(() => {
    if (socket) {
      const handleExpenseAdded = () => {
        refetch(); // Refetch instead of adding manually
      };
      const handleExpenseUpdated = () => {
        refetch();
      };
      const handleExpenseDeleted = () => {
        refetch();
      };

      socket.on('expenseAdded', handleExpenseAdded);
      socket.on('expenseUpdated', handleExpenseUpdated);
      socket.on('expenseDeleted', handleExpenseDeleted);

      return () => {
        socket.off('expenseAdded', handleExpenseAdded);
        socket.off('expenseUpdated', handleExpenseUpdated);
        socket.off('expenseDeleted', handleExpenseDeleted);
      };
    }
  }, [socket, refetch]);

  const handleCreateExpense = async (expense: Task) => {
    await addExpenseMutation({
      variables: { ...expense, completed: false },
    });
  };

  const handleDescriptionChange = async (id: number, description: string) => {
    await updateExpenseMutation({
      variables: { id, description },
    });
  };

  const handleAmountChange = async (id: number, amount: number) => {
    await updateExpenseMutation({
      variables: { id, amount },
    });
  };

  const handleDeleteExpense = async (id: number) => {
    await deleteExpenseMutation({ variables: { id } });
  };

  const categories = expenses.map((expense) => expense.category);
  const uniqueCategories = [...new Set(categories)];

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <main className="flex flex-col gap-12 items-center p-8 h-fit min-h-screen">
      <header>
        <h1 className="text-4xl font-bold">Expense Tracker</h1>
      </header>
      <ExpenseTask categories={uniqueCategories} handleCreateExpense={handleCreateExpense} />
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {uniqueCategories.map((category) => {
          const filteredExpenses = expenses.filter((expense) => expense.category === category); // Filter once
          return (
            <div className="category-card bg-linear-to-br w-fit h-fit px-2 py-4 shadow-xl rounded-xl from-purple-900 to-purple-950 flex flex-col gap-2" key={category}>
              <h2 className="text-2xl font-bold text-center">{category}</h2>
              <div className="flex flex-col w-full flex-wrap justify-center">
                {filteredExpenses.map((expense, index) => (
                  <div key={expense.id}>
                    <Expense
                      description={expense.description}
                      amount={expense.amount}
                      handleDeleteExpense={handleDeleteExpense}
                      id={expense.id}
                      handleDescriptionChange={handleDescriptionChange}
                      handleAmountChange={handleAmountChange}
                    />
                    {filteredExpenses.length > 1 && index < filteredExpenses.length - 1 && <hr key={`hr-${expense.id}`} />}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      <p className="relative bottom-0 w-full mt-auto text-white text-sm text-center">
        © {new Date().getFullYear() + " "}
        <a aria-label="Gavin Hensley's GitHub" href="https://github.com/G-Hensley" className="hover:underline">Gavin Hensley.</a> All rights reserved. Security tested by
        <a aria-label="Brenda Hensley's GitHub" href="https://github.com/B-Hensley" className="hover:underline">Brenda Hensley.</a>
      </p>
    </main>
  );
}