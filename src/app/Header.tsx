import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

export default function AppHeader() {
    return (
        <AppBar position="static">
            <Toolbar title="CGP Theme">
                <IconButton size="large" edge="start" color="inherit"><MenuIcon /></IconButton>
                <Typography variant="h6" component="div">CGP The<b>Me</b></Typography>
            </Toolbar>
        </AppBar>)
}
