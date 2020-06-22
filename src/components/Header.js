import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
// Drawer
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Button } from '@material-ui/core';

const useStyles = makeStyles( theme => ({
    toolbarMargin : {
        ...theme.mixins.toolbar,
        marginBottom : '0.5em'
    },
        tabs : {
            marginLeft : 'auto',
            background : 'transparent'
        },
        tab :{
             textTransform : 'none',
             color : "black",
             fontSize : "1.25rem"
            },
        menuIcon : {
            height : '2em',
            width : '2em',
            marginLeft : 'auto'
        },
        appBar : {
            zIndex: theme.zIndex.modal + 1
        },
        listItem : {
            fontSize : '10'
        },
        drawerStyle : {
            background : "#fff"
        }
        
        }))
const Header = () => {
    const classes = useStyles(); 
    const theme = useTheme();

    const matchMD = useMediaQuery(theme.breakpoints.down("md"));

    const [ values, setValues ] = useState(0);
    const [ drawerOpen, setDrawerOpen] = useState(false)

    const handleChange = (event, newValue) =>{
        setValues(newValue)
    }

    useEffect(() => {
        
        if( window.location.pathname === '/' && values !== 0){
            setValues(0)
        } 

        else if( window.location.pathname === '/about' && values !== 1){
            setValues(1)
        }

        else if( window.location.pathname === '/skills' && values !==2){
            setValues(2)
        }

        else if( window.location.pathname === '/contact' && values !==3){
            setValues(3)
        }
        
    }, [values])

    const NavTabs = (
        <React.Fragment>
            <Tabs value={values} onChange={handleChange} indicatorColor="primary" className={classes.tabs}>
              <Tab component={Link} to="/" style={{ fontFamily:  'Raleway'}}      className={classes.tab} label="Home" />
              <Tab component={Link} to="/about" style={{ fontFamily:  'Raleway'}} className={classes.tab} label="About" />
              <Tab component={Link} to="/skills" style={{ fontFamily:  'Raleway'}} className={classes.tab} label="Skills" />
              <Tab component ={Link} to="/contact"  style={{ fontFamily:  'Raleway'}} className={classes.tab} label="Contact" />
              </Tabs>
        </React.Fragment>

    )
    
    const Drawer = (
        <React.Fragment>

            <SwipeableDrawer
            open = {drawerOpen}
            onOpen = {() => setDrawerOpen(true)}
            onClose = {() => setDrawerOpen(false)}
            classes ={{ paper : classes.drawerStyle}}
            >
      <div className = {classes.toolbarMargin} />

                <List>
                    <ListItem button divider component={Link} to='/' onClick={() =>setDrawerOpen(false)}>
                        <ListItemText  style={{ padding: 5}}>Home</ListItemText>
                    </ListItem>
                
               
                    <ListItem button divider component={Link} to='/about' onClick={() =>setDrawerOpen(false)}>
                        <ListItemText style={{ padding: 5, fontFamily:  'Raleway'}}>About</ListItemText>
                    </ListItem>
                
                
                    <ListItem button divider component={Link} to='/skills' onClick={() =>setDrawerOpen(false)} >
                        <ListItemText  style={{ padding: 5, fontFamily:  'Raleway'}}>Skills</ListItemText>
                    </ListItem>

                    <ListItem button divider component={Link} to='/contact' onClick={() =>setDrawerOpen(false)} >
                        <ListItemText  style={{ padding: 5, fontFamily:  'Raleway'}}>Contact</ListItemText>
                    </ListItem>
                </List>

            </SwipeableDrawer>
            <IconButton style={{marginLeft : 'auto'}} onClick={()=> setDrawerOpen(!drawerOpen)} >
                <MenuIcon className={classes.menuIcon}/>
            </IconButton>
        </React.Fragment>
    )
    
    return(
        <div>
                {/* style={{ background : 'transparent', boxShadow: 'none'}} */}
                <AppBar  position="fixed" className={classes.appBar} style={{ background : 'white', boxShadow: 'none'}}  >
        <ToolBar >
        <Typography variant={ matchMD ? "h4":"h3"} component={Link} to="/" style={{textDecoration : 'none'}}  >
            Hemanth 
          </Typography>

          
              { matchMD ? Drawer :  NavTabs}
          
        </ToolBar>
        
          
      </AppBar>
      <div className = {classes.toolbarMargin} />

        </div>
        
    )
}

export default Header