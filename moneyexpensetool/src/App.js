

import { Main } from "./components/UIKit/Grid"
import Line from "./components/UIKit/Line"
import './App.css';
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import AddExpensePage from './components/AddExpensePage';
import SettingsPage from './components/SettingsPage';
import HomePage from './components/HomePage';
import SaveSuccessfully from './components/UIKit/SaveSuccessfully';


function App() {
  return (

    <Main>
      <BrowserRouter>
        <Line justify="center" >
              <div>
                <Link className="btn btn-success" to="/">HomePage</Link>
                <Link className="btn btn-primary" to="/SettingsPage">SettingsPage</Link>
                <Link className="btn btn-info" to="/AddExpensePage">AddExpensePage</Link>
              </div>
        </Line>

        <div>
          <Routes>

            <Route path="/" exact element={<HomePage />} />
            <Route path="/SettingsPage" element={<SettingsPage />} />
            <Route path="/AddExpensePage" element={<AddExpensePage />} />
            <Route path="/saveSuccessfully" element={<SaveSuccessfully />} />
          </Routes>
        </div>
      </BrowserRouter>

    </Main>

  );
}

export default App;
