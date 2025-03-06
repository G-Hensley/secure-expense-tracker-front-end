'use client';

import ExpenseTask from "@/app/components/ExpenseTask";
import { Task } from "@/app/types/Task";
import { useState } from "react";
import Expense from "@/app/components/Expense";

export default function Home() {

  const [expenses, setExpenses] = useState<Task[]>([]);

  const handleCreateExpense = (expense: Task) => {
    expense = {
      id: Date.now(),
      description: expense.description,
      category: expense.category,
      amount: expense.amount,
      completed: false,
    }
    setExpenses([...expenses, expense]);
  };

  const handleDescriptionChange = (id: number, description: string) => {
    setExpenses(expenses.map((expense) => expense.id === id ? {...expense, description} : expense));
  }

  const handleAmountChange = (id: number, amount: number) => {
    setExpenses(expenses.map((expense) => expense.id === id ? {...expense, amount} : expense));
  }

  const handleDeleteExpense = (id: number) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  }

  const categories = expenses.map((expense) => expense.category);
  const uniqueCategories = [...new Set(categories)];
  return (
    <main className="flex flex-col gap-12 items-center p-8 h-fit min-h-screen">
      <header>
        <h1 className="text-4xl font-bold">Expense Tracker</h1>
      </header>
      <ExpenseTask categories={uniqueCategories} handleCreateExpense={handleCreateExpense} />
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {uniqueCategories.map((category) => {
          return (
            <div className="category-card bg-linear-to-br w-fit h-fit px-2 py-4 shadow-xl rounded-xl from-purple-900 to-purple-950 flex flex-col gap-2" key={category}>
              <h2 className="text-2xl font-bold text-center">{category}</h2>
              <div className="flex flex-col w-full flex-wrap justify-center">
                {expenses.filter((expense) => expense.category === category).map((expense) => {
                  return (
                    <div key={expense.id}>
                      <Expense
                        key={expense.id}
                        description={expense.description}
                        amount={expense.amount}
                        handleDeleteExpense={handleDeleteExpense}
                        id={expense.id}
                        handleDescriptionChange={handleDescriptionChange}
                        handleAmountChange={handleAmountChange}
                      />
                      {expenses.filter((expense) => expense.category === category).length > 1 && expense.id !== expenses[expenses.length - 1].id && <hr key={expense.id}/>}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
      <p className="relative bottom-0 w-full mt-auto text-white text-sm text-center">&copy; {new Date().getFullYear() + " "}
        <a aria-label="Gavin Hensley's GitHub" href="https://github.com/G-Hensley" className="hover:underline">Gavin Hensley.</a> All rights reserved.
      </p>
    </main>
  );
}
