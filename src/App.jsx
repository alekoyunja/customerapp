import './App.css';
import CustomerForm from './components/CustomerForm';
import CustomerList from './components/CustomerList';
import { useState } from 'react';

function App() {

  const [customers,setCustomers]=useState([])

const addNewCustomer=(newCustomer)=>{
    // setCustomers([...customers,newCustomer]);
    setCustomers((prevState)=>[newCustomer,...prevState]);
    
};
  return (
    <div className="App">
      <h1>Customer Manage System</h1>
      <CustomerForm addNewCustomer={addNewCustomer}/>
      <CustomerList customers={customers}/>
    </div>
  );
}

export default App;
