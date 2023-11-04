import React from "react";
import { TransactionList } from "./TransactionList";
export const History = () => {
  return (
    <>
      <h3>History</h3>
      <div className="history">
        <TransactionList />
      </div>
    </>
  );
};
