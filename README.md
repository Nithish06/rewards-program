# Rewards Program – React Application

## 📌 Problem Statement

This project simulates a **customer rewards program** for a retailer. Customers earn reward points based on the amount spent in each transaction. The goal is to calculate reward points per transaction, aggregate them by customer and month, and display summarized totals using a clean and scalable React architecture.

The application processes transaction data spanning **three consecutive months** and displays:

* Individual transaction rewards
* Monthly reward totals per customer
* Overall reward totals per customer

---

## 🧮 Reward Calculation Rules

Reward points are calculated **per transaction** based on the following rules:

| Transaction Amount | Reward Points                             |
| ------------------ | ----------------------------------------- |
| $0 – $50           | 0 points                                  |
| $50 – $100         | 1 point per dollar over $50               |
| Over $100          | 2 points per dollar over $100 + 50 points |

### Examples

* `$75` → 25 points
* `$100.2` → 50 points (decimals are ignored)
* `$120` → 90 points

---

## 🛠 Tech Stack & Constraints

* **React JS** (JavaScript only)
* ❌ No Redux
* ❌ No TypeScript
* ✅ Functional components & Hooks
* ✅ Pure utility functions
* ✅ Async API simulation using Promises
* ✅ Unit testing with Jest

---

## 🧱 Project Structure

```
src/
 ├── api/                 # Mock API layer
 ├── components/          # UI components (tables, loader)
 ├── hooks/               # Custom hook for data handling
 ├── utils/               # Pure business logic functions
 ├── mockData/            # Transaction dataset
 ├── __tests__/           # Unit tests
 ├── App.jsx              # Root component
 ├── index.js             # Entry point
 └── styles.css           # Basic styling
```

---

## 🧠 Design Decisions

* **Pure Functions:** Reward calculation and aggregation logic are kept outside React components for testability and reusability.
* **Custom Hook (`useRewardsData`):** Centralizes data fetching, transformation, and state management without Redux.
* **Month + Year Aggregation:** Prevents collisions across years and ensures future-proof reporting.
* **No setTimeout:** API simulation uses `Promise.resolve()` to closely mimic real-world async behavior.
* **PropTypes:** Used for runtime prop validation in the absence of TypeScript.

---

## 📊 UI Breakdown

The application renders three tables:

1. **Transactions Table**

   * Transaction ID
   * Customer Name
   * Date
   * Product
   * Amount
   * Reward Points

2. **Monthly Rewards Table**

   * Customer Name
   * Month
   * Year
   * Total Reward Points

3. **Total Rewards Table**

   * Customer Name
   * Total Reward Points (across all months)

---

## 🚀 How to Run the Project

```bash
npm install
npm start
```

The app will be available at `http://localhost:3000`.

---

## 🧪 Testing

Unit tests are written using **Jest** for the reward calculation logic.

```bash
npm test
```

The tests validate:

* Correct reward calculation
* Decimal handling
* Edge cases

---

## 🔮 Possible Enhancements

* Pagination for large datasets
* Sorting controls on table headers
* Error boundaries
* Integration with a real backend API
* Accessibility improvements

---

## 🏁 Summary

This project demonstrates clean React architecture, strong JavaScript fundamentals, and correct handling of real-world business logic. It is designed to be scalable, testable, and production-ready.

---

👤 **Author:** Nithish Kumar
