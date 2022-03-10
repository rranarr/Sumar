import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';

import Search from '@mui/icons-material/Search';


const App = () => {
  return(
    <div className="App">
      <header className="App-header">
        <Button
        startIcon={<Search/>}
        size='large' 
        variant='contained'
        color='secondary'>Hell</Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};

export default App;
