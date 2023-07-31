import React from 'react';
// import logo from './logo.svg';
import { Header } from './components/Header.js';
import { Balance } from './components/Balance.js';
import { IncomeExpenses } from './components/IncomeExpenses.js';
import { TransactionList } from './components/TransactionList.js';
import { AddTransaction } from './components/AddTransaction.js';
import './App.css';

import { GlobalProvider } from './context/GlobalState.js'

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div classname="container">
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
