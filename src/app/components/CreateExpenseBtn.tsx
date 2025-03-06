import "./CreateExpenseBtn.css";

export default function CreateExpenseBtn( { handleCreateNewExpense }: { handleCreateNewExpense: () => void } ) {
    return (
        <button
        aria-label='Create a new expense'
        onClick={handleCreateNewExpense}
        className='font-mono create-btn hover:scale-105 transition-all duration-200 active:scale-95 rounded-lg p-2 flex 
            items-center gap-2 text-2xl cursor-pointer'>
        <div className='flex items-end justify-center text-4xl font-normal h-fit' aria-hidden='true'>
          +
        </div>
        Expense
      </button>
    )
};
