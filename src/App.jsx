import Header from "./compenents/Header";
import Balance from "./compenents/Balance";
import IncomeExpenses from "./compenents/IncomeExpenses";
import AddTransaction from "./compenents/AddTransaction";
import TransactionList from "./compenents/TransactionList";
import { GlobalProvider } from "./context/GlobalState";
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;