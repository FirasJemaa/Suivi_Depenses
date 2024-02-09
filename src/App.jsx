import Header from "./compenents/Header";
import Balance from "./compenents/Balance";
import IncomeExpenses from "./compenents/IncomeExpenses";
import TransactionList from "./compenents/TransactionList";
import AddTransaction from "./compenents/AddTransaction";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;