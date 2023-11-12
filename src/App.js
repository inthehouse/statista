import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StatisticProvider } from '../src/context/StatisticContext';

import IndexPage from './pages/index';
import DetailPage from './pages/detail';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <StatisticProvider>
          <Routes>
            <Route exact path="/" element={<IndexPage />} />
            <Route exact path="/detail" element={<DetailPage />} />
          </Routes>
        </StatisticProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
