import React, { useState } from "react";

import styles from "./TransactionsTable.module.css";
import transactionsData from "./transactions.json";

interface Transaction {
  added_date: string;
  transaction_date: string;
  description: string;
  value: number;
  category: string;
  type: boolean;
}

const TransactionsTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const transactions: Transaction[] = transactionsData;

  const transactionsPerPage: number = 15;
  const indexOfLastTransaction: number = currentPage * transactionsPerPage;
  const indexOfFirstTransaction: number =
    indexOfLastTransaction - transactionsPerPage;

  const currentTransactions = transactions.slice(
    indexOfFirstTransaction,
    indexOfLastTransaction
  );
  const totalPages: number = Math.ceil(
    transactions.length / transactionsPerPage
  );

  return (
    <section className={styles.tableContainer}>
      <div className={styles.tableContainer_titleContainer}>
        <h3 className={styles.tableContainer_title}>Транзакции</h3>
        <button className={styles.tableContainer_refreshButton}>x</button>
      </div>
      <div className={styles.tableContainer_main}>
        <table className={styles.transactionsTable}>
          <thead className={styles.transactionsTable_header}>
            <tr className={styles.transactionsTable_header_titles}>
              <th className={styles.transactionsTable_header_title}>№</th>
              <th className={styles.transactionsTable_header_title}>
                Дата добавления
              </th>
              <th className={styles.transactionsTable_header_title}>
                Дата транзакции
              </th>
              <th className={styles.transactionsTable_header_title}>
                Категория
              </th>
              <th className={styles.transactionsTable_header_title}>
                Описание
              </th>
              <th className={styles.transactionsTable_header_title}>Сумма</th>
              <th className={styles.transactionsTable_header_title}>Тип</th>
              <th className={styles.transactionsTable_header_title}>
                Действия
              </th>
            </tr>
          </thead>
          <tbody className={styles.transactionsTable_body}>
            {currentTransactions.map((transaction, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transaction.added_date}</td>
                  <td>{transaction.transaction_date}</td>
                  <td>{transaction.description}</td>
                  <td>{transaction.type ? "income" : "expense"}</td>
                  <td>{transaction.value}</td>
                  <td>Изменения</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.tableContainer_buttom}>
        {" "}
        <div className={styles.pagination}>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? styles.active : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransactionsTable;
