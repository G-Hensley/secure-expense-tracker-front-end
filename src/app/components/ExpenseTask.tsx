'use client';

import { useState } from 'react';
import './ExpenseTask.css';
import CreateExpenseBtn from './CreateExpenseBtn';
import { Task } from '@/app/types/Task';

export default function ExpenseTask({
  handleCreateExpense,
  categories,
}: {
  handleCreateExpense: (expense: Task) => void;
  categories: string[];
}) {
  const [createNewExpense, setCreateNewExpense] = useState(false);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState(0);
  const [newCategory, setNewCategory] = useState('');
  const [amountError, setAmountError] = useState('');

  const handleCreateNewExpense = () => {
    setCreateNewExpense((prev) => !prev);
  };

  const validateAmount = (value: number) => {
    if (value < 0) {
      setAmountError('Amount cannot be negative');
      return false;
    }
    if (value > 9999999999) {
      setAmountError('Amount is too large');
      return false;
    }
    setAmountError('');
    return true;
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setAmount(value);
    validateAmount(value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const finalCategory = category === 'new' ? newCategory : category;

    if (!validateAmount(amount)) {
      return;
    }

    if (description !== '' && finalCategory !== '' && amount !== 0) {
      handleCreateExpense({
        id: Date.now(),
        description: description,
        category: finalCategory,
        amount: amount,
      });

      setDescription('');
      setCategory('');
      setNewCategory('');
      setAmount(0);
      setAmountError('');

      setCreateNewExpense((prev) => !prev);
    }
  };

  return (
    <>
      {!createNewExpense && (
        <CreateExpenseBtn handleCreateNewExpense={handleCreateNewExpense} />
      )}

      {createNewExpense && (
        <form
          onSubmit={handleSubmit}
          className='flex flex-col sm:grid grid-cols-2 gap-6 justify-items-center p-6 rounded-xl shadow-xl relative'
          aria-label='Create a new expense'>
          <div className='flex flex-col gap-2 text-center'>
            <label className='text-lg' htmlFor='description'>
              Description
            </label>
            <input
              aria-label='Description'
              className='bg-primary p-2 rounded-lg'
              type='text'
              placeholder='Description'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength={50}
              aria-required='true'
            />
          </div>
          <div className='flex flex-col gap-2 text-center'>
            <label className='text-lg' htmlFor='category'>
              Category
            </label>
            <select
              aria-label='Category'
              className='bg-primary p-2 rounded-lg'
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              aria-required='true'>
              <option aria-label='Select a category' value=''>
                Select a category
              </option>
              {categories.map((category) => (
                <option aria-label={category} key={category} value={category}>
                  {category}
                </option>
              ))}
              <option value='new'>Add New Category</option>
            </select>
            {category === 'new' && (
              <input
                aria-label='New category'
                className='bg-primary p-2 rounded-lg mt-2'
                type='text'
                placeholder='Enter new category'
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                required
                aria-required='true'
                maxLength={50}
              />
            )}
          </div>
          <div className='flex flex-col gap-2 col-span-2 w-fit sm:w-1/3 text-center'>
            <label className='text-lg' htmlFor='amount'>
              Amount
            </label>
            <input
              aria-label='Amount'
              className='bg-primary p-2 rounded-lg text-center'
              type='number'
              min={0}
              placeholder={amount === 0 ? 'Amount' : ''}
              value={amount === 0 ? '' : amount}
              onChange={handleAmountChange}
              max={9999999999}
              maxLength={10}
              aria-required='true'
              aria-invalid={!!amountError}
              aria-errormessage='amount-error'
            />
            {amountError && (
              <p
                id='amount-error'
                className='text-red-500 text-sm mt-1'
                role='alert'>
                {amountError}
              </p>
            )}
          </div>
          <button
            aria-label='Add expense'
            onClick={handleSubmit}
            className='self-center col-span-2 w-fit cursor-pointer mt-2 bg-white text-black text-lg px-4 py-2 rounded-lg hover:opacity-60 
                    transition-all duration-300 active:scale-95 font-mono'
            type='submit'>
            Add Expense
          </button>
        </form>
      )}
    </>
  );
}
