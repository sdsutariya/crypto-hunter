import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModel';
import UserSidebar from './Authentication/UserSidebar';
// import CssBaseline from '@mui/material/CssBaseline';

const useStyles = makeStyles(() => ({
    title: {
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
        flex: 1
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#fff'
        },
        type: 'dark'
    },
});

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const { currency, setCurrency,user } = CryptoState();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color="transparent" position="static">
                <Container>
                    <Toolbar>
                        <Typography onClick={() => { navigate('/') }} variant="h6" className={classes.title}>Crypto Hunter</Typography>
                        <Select
                            variant="outlined"
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={currency}
                            style={{ width: 100, height: 40, marginLeft: 15, color: 'white', border: '1px solid white' }}
                            onChange={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                        </Select>
                        {user ? <UserSidebar /> : <AuthModal />}
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
}

export default Header