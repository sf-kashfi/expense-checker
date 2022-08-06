import './App.css';
import Expenses from './components/expenses/Expenses';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { faCar } from '@fortawesome/free-solid-svg-icons';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

function App() {
  const categoryArray = [
    { id: 'c0', categoryName: 'Travel', categoryIcon: <FontAwesomeIcon icon={faPlane} /> },
    { id: 'c1', categoryName: 'Food', categoryIcon: <FontAwesomeIcon icon={faBurger} /> },
    { id: 'c2', categoryName: 'Shopping', categoryIcon: <FontAwesomeIcon icon={faShoppingBag} /> },
    { id: 'c3', categoryName: 'Transport', categoryIcon: <FontAwesomeIcon icon={faCar} /> },
    { id: 'c4', categoryName: 'Entertainment', categoryIcon: <FontAwesomeIcon icon={faGamepad} /> },
    { id: 'c5', categoryName: 'Rent', categoryIcon: <FontAwesomeIcon icon={faHome} /> },
    { id: 'c6', categoryName: 'Others', categoryIcon: <FontAwesomeIcon icon={faQuestion} /> },
  ];
  const expensesArray = [
    { id: 'e1', title: 'Restorant', amount: 50.55, date: new Date(2020, 1, 15), ctgy: 1 },
    { id: 'e2', title: 'Home rent', amount: 78, date: new Date(2020, 7, 30), ctgy: 5 },


    { id: 'e5', title: 'Dubai', amount: 25, date: new Date(2021, 7, 15), ctgy: 0 },
    { id: 'e6', title: 'Pet Groom', amount: 700, date: new Date(2021, 4, 4), ctgy: 6 },
    { id: 'e7', title: 'Recharge', amount: 320, date: new Date(2021, 9, 17), ctgy: 5 },

    { id: 'e8', title: 'Mom Gift', amount: 48.7, date: new Date(2022, 7, 15), ctgy: 2 },
    { id: 'e9', title: 'Uber', amount: 12.9, date: new Date(2022, 2, 19), ctgy: 3 },
    { id: 'e10', title: 'Apple store', amount: 413.55, date: new Date(2022, 1, 6), ctgy: 2 },
    { id: 'e11', title: 'Work desk', amount: 50.21, date: new Date(2022, 1, 14), ctgy: 5 },
    { id: 'e12', title: 'Airfare', amount: 78, date: new Date(2022, 3, 22), ctgy: 0 },

    { id: 'e13', title: 'Black friday', amount: 100, date: new Date(2019, 8, 22), ctgy: 2 },
  ];
  return (
    <div className="App">
      <Expenses expenses={expensesArray} categories={categoryArray} />
    </div>
  );
}

export default App;
