
import './App.css';
import CreateDay from './component/CreateDay';
import CreateWord from './component/CreateWord';
import Day from './component/Day';
import Daylist from './component/Daylist';
import Header from './component/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path='/' element={<Daylist />} />
          <Route path='/day/:day' element={<Day />} />
          <Route path='/create_word' element={<CreateWord />} />
          <Route path='/create_day' element={<CreateDay />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
