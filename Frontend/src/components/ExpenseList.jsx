import {useState,useCallback,useMemo,} from "react";
import Item from "./ExpenseItem";
const List = (props) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const inputRef = useRef();
  const editExpense = useCallback((index) =>{
    setEditingIndex("");
    
  },[])

  const deleteExpense = useCallback((index) =>{
    setEditingIndex("");

  },[])


  return (
    <div className="list-wrapper">
      <div className="list-container">
        <h1 className="list-title">Expenses</h1>
        <div className="list-scroll-container">
          {props.expense && props.expense.length > 0 ? (
            props.expense.map((item, index) => (
              <div key={index} className="expense-card">
                <div className="expense-details">
                  <div className="expense-name">{item.expenseName}</div>
                  <div className="expense-info">
                    <span className="expense-amount">₹{item.amount}</span>
                    <span className={`expense-type ${item.type.toLowerCase()}`}>
                      {item.type}
                    </span>
                  </div>
                </div>
                <Item 
                  editExpense={() => editExpense(index)}
                  deleteExpense={() => deleteExpense(index)}
                  inputRef={inputRef}
                  isEditing={editingIndex === index}
                />
              </div>
            ))
          ) : (
            <div className="list-empty">
              <p>No expenses added yet. Start by adding your first expense!</p>
            </div>  
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
