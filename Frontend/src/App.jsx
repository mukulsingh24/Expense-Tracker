import { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Form from './components/ExpenseFrom'
import List from './components/ExpenseList'
import Item from './components/ExpenseItem'

function App() {
  const [expense,setExpense] = useState([])
  useEffect(() =>{
      fetch('https://69036feed0f10a340b2444d5.mockapi.io/Expenses').then(response => response.json()).then(data => setExpense(data));
  },[])
  function addExpense(expenseName,amount,type){
    const updatedExpense = {expenseName,amount,type};
    setExpense((prevExpense) => [...prevExpense , updatedExpense])
  }

  return (
    <div className="App">
      <div className="app-wrapper">
        <div className="form-section">
          <Form addExpense = {addExpense} />
        </div>
        <div className="list-section">
          <List expense = {expense} />
        </div>
      </div>
    </div>
  )
}

export default App
