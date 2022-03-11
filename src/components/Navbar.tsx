
import { Toolbar, Typography,IconButton } from '@mui/material';
import { AppBar } from '@mui/material';
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom";




const Navbar = () => {

    return(
        <AppBar position='static'>
            <Toolbar variant='dense'>
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon  />
                </IconButton>
                <Link to="/catches">Úlovky</Link>
                <Link to="/addCatch">Přidat</Link>

                <Typography variant='h6' color="inherit"  component="div">
                    Přihlásit se
                </Typography>

            </Toolbar>
        </AppBar>
        
    );
};

export default Navbar;