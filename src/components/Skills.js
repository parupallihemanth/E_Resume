import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles( theme =>({

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

    gridItems : {
        paddingLeft : '2em',
    }

}))


const Skills = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchSM = useMediaQuery( theme.breakpoints.down("sm"));
    const matchMD = useMediaQuery(theme.breakpoints.down("md"))

    return(
        <Grid container direction="column">
            <Grid item>
                <Typography variant="h3" className={classes.title} align={ matchSM ? "center" : undefined}>Skills</Typography>
            </Grid>
            <Grid item >
            <Typography paragraph variant="body1" className={classes.about} align={ matchMD ? "center" : undefined}>
                " My main area of expertise is developing and deploying seceure and scalable REST API'S in JavaScript and Python. { matchMD ? undefined: <br />}
                 I also have experince in developing small and medium scale applications using ReactJS."{ matchMD ? undefined: <br />}
            </Typography>
            
            </Grid>

            <Grid item>
                <Grid container direction="column" alignItems={ matchSM ? "center" : "flex-end"} style={{marginTop:'5em',  paddingRight : matchSM ? '0em' : '2em'}}>
                    <Grid item>
                            <Typography variant="h4">Frontend Technologies</Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant="h6" style={{color:'#000'}} align={ matchSM ? "center" : undefined}>HTML5, CSS3, JavaScript, ReactJS, React Material UI</Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item >
                <Grid container direction="column" alignItems={matchSM ? "center" : undefined} style={{marginBottom:'5em',marginTop:'5em', paddingLeft : matchSM ? '0em' : '2em'}}>
                    <Grid item>
                            <Typography variant="h4">Backend Technologies</Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant="h6" style={{color:'#000'}} align={ matchSM ? "center" : undefined}>JavaScript, NodeJS, Python, Django REST Framework</Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="column" alignItems={ matchSM ? "center" : "flex-end"} style={{paddingRight : matchSM ? '0em' : '2em'}}>
                    <Grid item>
                            <Typography variant="h4">Databases</Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant="h6" style={{color:'#000' }} align={ matchSM ? "center" : undefined}> SQL - PostgresSQL, NOSQL - MongoDB</Typography>
                    </Grid>

                </Grid>
            </Grid>

            <Grid item >
                <Grid container direction="column" alignItems={matchSM ? "center" : undefined} style={{marginBottom:'5em',marginTop:'5em', paddingLeft : matchSM ? '0em' : '2em'}}>
                    <Grid item>
                            <Typography variant="h4">Deployment</Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant="h6" style={{color:'#000' }} align={ matchSM ? "center" : undefined}>Docker, Netlify, AWS - EC2, EBS, S3</Typography>
                    </Grid>

                </Grid>
            </Grid>


        </Grid>
    )
}

export default Skills