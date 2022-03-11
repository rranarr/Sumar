import './App.css';
import Button from '@mui/material/Button';

import Search from '@mui/icons-material/Search';

import Navbar from './components/Navbar';

import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';

const App = () => {
  return(
    <div className="App">
      <Router>
      <Navbar />

      <Routes>
        <Route path='/catches'></Route>
      </Routes>

      <header className="App-header">
        <Button
        startIcon={<Search/>}
        size='large' 
        variant='contained'
        color='secondary'>Hell</Button>
      </header>
      </Router>
    </div>
  );
};

export default App;
