import transactions from '../mockData/transactions.json';

export const fetchTransactions = () => Promise.resolve({ data: transactions });

// export const fetchTransactions = () => Promise.reject('api failed');
