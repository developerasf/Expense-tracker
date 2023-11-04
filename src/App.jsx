import React from "react";
import "./App.css";
import { Header } from "../src/components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
// import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";
import { History } from "./components/History";

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <History />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
