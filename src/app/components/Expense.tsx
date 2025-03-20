import './Expense.css';
import { CiEdit } from 'react-icons/ci';
import { useState } from 'react';

export default function Expense({
  description,
  amount,
  handleDeleteExpense,
  id,
  handleDescriptionChange,
  handleAmountChange,
}: {
  description: string;
  amount: number;
  handleDeleteExpense: (id: number) => void;
  id: number;
  handleDescriptionChange: (id: number, description: string) => void;
  handleAmountChange: (id: number, amount: number) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  const [editedAmount, setEditedAmount] = useState(amount);

  const startEdit = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    handleDescriptionChange(id, editedDescription);
    handleAmountChange(id, editedAmount);
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditedDescription(description);
    setEditedAmount(amount);
  };

  return (
    <>
      <div className='flex flex-col gap-4 py-6 px-4 items-center justify-between expense-card w-full'>
        <div
          className={`flex gap-4 sm:flex-none justify-between w-full ${
            isEditing && 'flex-col sm:flex-row'
          }`}>
          {isEditing ? (
            <input
              maxLength={50}
              aria-label='Edit description'
              type='text'
              className='text-lg font-bold px-2 outline-none w-auto text-nowrap'
              spellCheck={false}
              contentEditable={isEditing}
              autoFocus={isEditing}
              onChange={(e) => setEditedDescription(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  saveEdit();
                }
              }}
              placeholder={
                description == '' ? 'Description' : editedDescription
              }
              value={editedDescription}
            />
          ) : (
            <h2
              className='text-lg max-w-72 font-bold px-2 outline-none break-words'
              spellCheck={false}>
              {description == '' ? 'Description' : description}
            </h2>
          )}
          {isEditing ? (
            <input
              max={9999999999}
              aria-label='Edit amount'
              type='number'
              className='text-lg px-2 outline-none w-auto text-nowrap'
              spellCheck={false}
              contentEditable={isEditing}
              onChange={(e) => setEditedAmount(Number(e.target.value))}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  saveEdit();
                }
              }}
              value={editedAmount}
            />
          ) : (
            <p className='text-lg mr-4'>${editedAmount}</p>
          )}
        </div>
        <div className='flex gap-4 w-fit'>
          {isEditing ? (
            <div className='flex gap-2'>
              <button
                aria-label='Save edit'
                className='font-mono self-center w-fit cursor-pointer bg-green-900 text-white text-md px-2 py-1 rounded-lg hover:opacity-60 
                        transition-all duration-300 active:scale-95'
                onClick={saveEdit}>
                SAVE
              </button>
              <button
                aria-label='Cancel edit'
                className='font-mono self-center w-fit cursor-pointer bg-red-900 text-white text-md px-2 py-1 rounded-lg hover:opacity-60 
                        transition-all duration-300 active:scale-95'
                onClick={cancelEdit}>
                CANCEL
              </button>
            </div>
          ) : (
            <button
              aria-label='Edit'
              className='cursor-pointer active:scale-80 transition-all duration-200 hover:scale-120 hover:opacity-60'
              onClick={startEdit}>
              <CiEdit className='text-3xl' />
            </button>
          )}
          <button
            aria-label='Delete'
            className='font-mono self-center w-fit cursor-pointer bg-white text-black text-md px-2 py-1 rounded-lg hover:opacity-60 
                        transition-all duration-300 active:scale-95'
            onClick={() => handleDeleteExpense(id)}>
            DELETE
          </button>
        </div>
      </div>
    </>
  );
}
