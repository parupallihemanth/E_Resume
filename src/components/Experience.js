import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography'; 

import cover from '../assets/cover.JPG'

const useStyles = makeStyles( theme =>({
    title : {
        paddingLeft : '1em',
        paddingRight : '1em',
        paddingTop : '1em',
        
        [theme.breakpoints.down("md")] :{
            paddingTop : '1em',
           
        }
    },
}))


const Experience = () =>  {
    const classes = useStyles();

    return (
        
                <Grid  container direction="column"  style={{maxWidth : '40em'}}>

<Grid item  >

<Card  style={{ marginTop : '5em', marginBottom : '5em', marginLeft: '5em'}}  >
       
       <CardContent >
               <Typography variant="h6">
                   Company Name : Suraaga Technologies Pvt Ltd
               </Typography>
               <Typography variant="h6">
                   Position : Associate software developer
               </Typography>
               <Typography variant="h6">
                   Duration : 16months
               </Typography>
       </CardContent>
       
       
       
   </Card>

</Grid>

<Grid item>

<Card style={{marginLeft:'5em'}} >
       
       <CardContent >
               <Typography variant="h6">
                   Company Name : Dalhousie University
               </Typography>
               <Typography variant="h6">
                   Position : Graduate Teaching Assistant
               </Typography>
               <Typography variant="h6">
                   Duration : 2months
               </Typography>
       </CardContent>
       
       
       
   </Card>


</Grid>

  

</Grid>  
       
         

            
    )
}

export default Experience