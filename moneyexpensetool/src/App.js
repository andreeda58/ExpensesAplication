


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddExpensePage from './components/AddExpensePage';
import SettingsPage from './components/SettingsPage';
import HomePage from './components/HomePage';
import SaveSuccessfully from './components/UIKit/SaveSuccessfully';
import NavBar from "./components/UIKit/NavBar";

const collection = [{
  path: "/",
  title: "Home",
}, {
  path: "/SettingsPage",
  title: "Settings",
},
{
  path: "/AddExpensePage",
  title: "Add",
}]


function App() {
  return (
    <div className="App" >
      <BrowserRouter>
        <NavBar routesCollection={collection}></NavBar>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/SettingsPage" element={<SettingsPage />} />
          <Route path="/AddExpensePage" element={<AddExpensePage />} />
          <Route path="/saveSuccessfully" element={<SaveSuccessfully />} />
        </Routes>

      </BrowserRouter>
    </div>

  );
}

export default App;
