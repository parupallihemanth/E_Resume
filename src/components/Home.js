import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/styles';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import Avatar from '@material-ui/core/Avatar';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import cover from '../assets/cover.JPG';


const useStyles = makeStyles( theme =>({
    avatar :{
        height : '15em',
        width : '15em',
        [theme.breakpoints.down("sm")] :{
            height : '10em',
            width : '10em',
        }
    }
}))

const Home = () => {
    const classes = useStyles()
    return(
       <Grid container direction="column" alignItems="center">
           <Grid item style={{ marginTop:"2em"}}>
                <Avatar src={cover} alt="cover image"  className={classes.avatar}/>
           </Grid>
            <Grid>
                <Typography variant="h2" align="center">
                    Hi, I'm Hemanth Parupalli!
                </Typography>
                <Typography variant="h6" align="center">
                    Full stack developer looking for oppurtunities
                </Typography>
                
                <Grid container direction="row" justify="space-evenly" style={{ marginTop:"2em"}}>

                    <Grid  item component = {"a"} href="https://www.linkedin.com/in/parupalli-hemanth-babu/" rel="noopener noreferrer" target="_blank">
                        
                        <LinkedInIcon style ={{ height : "2em", width : '2em', color : "black", textDecoration:"none" }} />
                        
                        
                    
                    </Grid>
                    <Grid  item component = {"a"} href="https://github.com/parupallihemanth?tab=repositories" rel="noopener noreferrer" target="_blank" >
                        
                        <GitHubIcon style ={{ height : "2em", width : '2em', color : "black", textDecoration:"none" }} />
                        
                    </Grid>
                    <Grid  item component = {"a"} href="https://www.instagram.com/hemanth_parupalli/" rel="noopener noreferrer" target="_blank" >
                        
                        <InstagramIcon style ={{ height : "2em", width : '2em', color : "black", textDecoration:"none" }}/> 
                        
                    </Grid>
                    {/* <Grid item className={classes.icon} component = {"a"} href="https://instagram.com" rel="noopener noreferrer" target="_blank">
                    <img src={ instagram } alt="instagram icon"  />
                </Grid> */}

                </Grid>
                
                
            </Grid>
       </Grid> 
    )
}

export default Home