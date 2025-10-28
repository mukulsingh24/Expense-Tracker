import { useState } from 'react'
import Form from './components/ExpenseFrom'
import List from './components/ExpenseList'
import Item from './components/ExpenseItem'

function App() {
  const [expense,setExpense] = useState([])
  function addExpense(expenseName,amount,type){
    const updatedExpense = {expenseName,amount,type};
    setExpense((prevExpense) => [...prevExpense , updatedExpense])
  }

  return (
    <div className="App">
      <Form addExpense = {addExpense} />
      <List expense = {expense} />
      <Item />
    </div>
  )
}

export default App
