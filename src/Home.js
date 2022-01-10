import {
    makeStyles, AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemIcon, ListItemText,
    Divider,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import MicNoneIcon from '@material-ui/icons/MicNone';
import MoreVert from '@material-ui/icons/MoreVert';
import Apps from '@material-ui/icons/Apps';

import HomeIcon from '@material-ui/icons/Home'
import Subscriptions from '@material-ui/icons/Subscriptions'
import Whatshot from '@material-ui/icons/Whatshot'




const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh"
    },
    logo: {
        height: 25
    },
    menuIcon: {
        paddingRight: theme.spacing(5),
        paddingLeft: theme.spacing(2)
    },
    appbar: {
        boxShadow: "none",
        zIndex: theme.zIndex.drawer + 1,
    },
    rawer: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
        borderRight: "none",
    },
    icons: {
        paddingRight: theme.spacing(4),
    },
    grow: {
        flexGrow: "1"
    },
    ListItemText: {
        fontSize: 14,
    }
}))


export default function Home() {

    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar color="#FFFFFF" className={classes.appbar}>
                <Toolbar>
                    <IconButton edge="start" className={classes.menuIcon} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>

                    <img src="./images/preto.png"
                        className={classes.logo}
                        alt="logo preta" />



                    <div className={classes.grow} />





                    <IconButton className={classes.icons} color="inherit"
                    >
                        <MicNoneIcon />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit" >
                        <Apps />
                    </IconButton>

                    <IconButton className={classes.icons} color="inherit" >
                        <MoreVert />
                    </IconButton>





                    <Button
                        startIcon={<AccountCircleIcon />}
                        variant="outlined"
                        color="secondary">fazer Loggin</Button>

                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                       
                            <ListItem button>
                                <ListItemIcon>{<HomeIcon />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={"Inicio"} 
                                />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>{<Subscriptions />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={"Em alta"} 
                                />
                            </ListItem>

                            <ListItem button>
                                <ListItemIcon>{<Whatshot />}</ListItemIcon>
                                <ListItemText classes={{
                                    primary: classes.ListItemText
                                }} primary={"Incrições"} 
                                />
                            </ListItem>

                    </List>
                    <Divider />

                </div>
            </Drawer>

        </div>
    )
}