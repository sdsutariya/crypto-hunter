import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header'
import Homepage from './pages/Homepage'
import Coinpage from './pages/Coinpage'
import { makeStyles } from '@material-ui/core/styles';
import Alert from './Components/Alert';


function App() {

  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: '#14161a',
      color: 'white',
      minHeight: '100vh',
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header/>
        <Routes>
        <Route path='/'  Component={Homepage} />
        <Route path='/coins/:id' Component={Coinpage} />
        </Routes>
      </div>
      <Alert />
    </BrowserRouter>
  );
}

export default App;
