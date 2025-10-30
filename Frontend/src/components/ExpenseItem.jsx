import { useState, useEffect, useRef } from "react";

function Item({ editExpense, deleteExpense, inputRef, isEditing, onSaveEdit }) {
  const [edit, setEdit] = useState("");
  
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSaveEdit();
    }
  }
  
  return (
    <div className="expense-actions">
      {isEditing ? (
        <>
          <input 
            ref={inputRef} 
            placeholder="Edit your expense" 
            className="edit-input"
            onKeyPress={handleKeyPress}
            autoFocus
          />
          <button className="btn-save" onClick={onSaveEdit}>
            Save
          </button>
        </>
      ) : (
        <>
          <button className="btn-edit" onClick={editExpense}>
            Edit
          </button>
          <button className="btn-delete" onClick={deleteExpense}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default Item;
