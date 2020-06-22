import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Hidden from '@material-ui/core/Hidden'

import cover from '../assets/cover.JPG';
import Recommendation from '../assets/Rec.jpg';
import laptop from '../assets/Laptop.jpg';
// import Experience from './Experience';

const useStyles = makeStyles( theme =>({
    aboutContainer :{
            //  maxWidth : '30em'
    },
    title : {
        paddingLeft : '1em',
        paddingRight : '1em',
        paddingTop : '1em',
        
        [theme.breakpoints.down("md")] :{
            paddingTop : '1em',
           
        }
    },
    about : {
        marginLeft : '5em',
        marginTop : '2em',
        [theme.breakpoints.down("md")] :{
            padding : '0em',
            marginLeft : '0em'
        }
    },
    avatar :{
        height : '10em',
        width : '10em',
        [theme.breakpoints.down("sm")] :{
            height : '7em',
            width : '7em',
        }
    },
    recommendation :{
        height : '20em',
        width : '23em',
        [theme.breakpoints.down("sm")] :{
            height : '15em',
            width : '15em',
        }
    }


}))


const About = () => {

    const classes = useStyles();
    const theme = useTheme();
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))
    
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    
    return(
        <Grid container direction="column" className={classes.aboutContainer} alignItems={ matchMD ? "center" : undefined}>
            <Grid item >
            <Typography variant="h3" className={classes.title} >
                About
            </Typography> 
            </Grid>
            <Grid item >
            <Typography paragraph variant="body1" className={classes.about} align={ matchMD ? "center" : undefined}>
                " I am a student full-stack developer with a flair for creating elegant software solutions in the least amout of time. { matchMD ? undefined: <br />}
                Experienced in all stages of development cycle staring from requirements gathering, designing, writing { matchMD ? undefined: <br />}  code, testing deployment.
                "
            </Typography>
            {/* <Typography paragraph variant="body2" className={classes.about} align={ matchMD ? "center" : undefined}>
                After working 16months as a web developer, I decided to move Canada to pursue 
                {/* I leave in Halifax, Nova scotia, Canada. Currently, pursuing Master of Internetworking at Dalhousie University. I choose Internetworking { matchMD ? undefined: <br />}as my major */}
            {/* </Typography> */} 
            </Grid>

            <Grid container direction="column">
                {/* <Grid item >
                <Typography variant="h3" align="center" className={classes.title} >
                Experience
            </Typography> 

                </Grid> */}
                {/* <Grid item>
                    <Experience />
                </Grid> */}

            </Grid>

            <Grid container direction="column"  >
                <Grid item>
                <Typography variant="h3" align="center" className={classes.title} >
                Team
                </Typography>  
                </Grid>
            </Grid>
            
            
            <Grid container direction= { matchSM ? "column" : "row"} alignItems= "center"  justify= "space-evenly" style={{ marginTop:'7em'}}>
            <Hidden lgUp>
                <Grid item >

                <Grid container direction="column" alignItems="center"  >

                <Avatar src={cover} alt="cover image" align="center"  className={classes.avatar}/>

                        <Typography paragraph variant="body2" style={{ maxWidth : '25em', marginTop:'1em'}}  align="center" >
                            Hemanth Parupalli, Master of Internetworking<br /> Dalhousie University <br />
                            Halifax, Nova scotia
                        </Typography>
                    </Grid>
                    </Grid>
                </Hidden>
                
                <Grid item style={{ marginTop : matchSM ? '5em' : undefined, marginBottom : matchSM ? '5em' : undefined }} >
                    <Grid container direction="column">
                        <Grid item >
                        <img src={Recommendation} alt="Suraaga docs" className={classes.recommendation} />
                       </Grid>
                        <Grid item >
                        <Typography variant="caption">A recommendation from previous employer</Typography>

                        </Grid>
                    </Grid>
                        
                </Grid>

                <Hidden mdDown>
                <Grid item >

<Grid container direction="column" alignItems="center"  >

<Avatar src={cover} alt="cover image" align="center"  className={classes.avatar}/>

<Typography paragraph variant="body2" style={{ maxWidth : '25em', marginTop:'1em'}}  align="center" >
    Hemanth Parupalli, Master of Internetworking<br /> Dalhousie University <br />
    Halifax, Nova scotia
</Typography>
</Grid>
</Grid>
                </Hidden>

                <Grid item >
                        <img src={laptop} alt="laptop" className={classes.recommendation} />
                </Grid>

                    
                
                

            </Grid>
            
        </Grid>
    )
}


export default About