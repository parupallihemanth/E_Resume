import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { makeStyles, useTheme } from '@material-ui/styles';

import Map from '../components/Map'


import airplane from '../assets/send.svg'

const useStyles = makeStyles( theme =>({

    title : {
        paddingLeft : '1em',
        paddingRight : '1em',
        paddingTop : '1em',
        
        [theme.breakpoints.down("md")] :{
            paddingTop : '1em',
           
        }
    },
    message : {
        border : ` 2px solid ${theme.palette.common.Green}`,
        marginTop :'5em',
        borderRadius : 5
    },
    map :{
        marginTop : '10em',
       
    }
}))




const Contact = () =>{
   
    const classes = useStyles();
    const theme = useTheme();
    
    const matchSM = useMediaQuery(theme.breakpoints.down("sm"))
    
    
    const [ name, setName ] = useState('');

    const [ email, setEmail] = useState('');
    const [ emailHelper, setEmailHelper ] = useState('');

    const [ phone, setPhone] = useState('');
    const [ phoneHelper, setPhoneHelper ] = useState('');

    const [ message, setMessage ] = useState('');


    

    const onChange = (event) =>{

        let valid;

        switch(event.target.id){
            case 'email' :
                setEmail(event.target.value);

                valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)
                if(!valid){
                    setEmailHelper('Invalid email')
                } else {
                    setEmailHelper("")
                }
                break

            case 'phone' :
                setPhone(event.target.value);
                valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(event.target.value)
                if(!valid){
                    setPhoneHelper("Invalid phone")
                } else {
                    setPhoneHelper("")
                }

                break
            default : 
                break
        }
    }

    // const handleSubmit = (event) =>{
    //     event.preventDefault();
    //     axios.post('https://formspree.io/babuparupalli@gmail.com')
    //     .then( response => console.log(response))
    //     .catch( error => console.log(error))
    //     // const form = event.target;

    //     // axios({
    //     //     method: "POST",
    //     //     url: "https://formspree.io/babuparupalli@gmail.com",
    //     //     data: new FormData(form)
    //     //   })
    //     //   .then( response => console.log(response))
    //     //   .catch( error => console.log(error))

    //     // console.log(name, email, phone, message)

    // }
    return(
        <Grid container direction = "row" >
            <Grid item container direction="column" alignItems="center" justify="center" md={5}  >
                <Grid item >

                    <Grid container direction="column">
                    <Grid item>
                    <Typography variant="h3" className={classes.title}>Contact</Typography>
                    
                </Grid>
            
                


            <Grid  item container style={{ maxWidth:"20em",marginTop : '5em'}}>
                <form action="https://formspree.io/babuparupalli@gmail.com" method="POST">

                
                <Grid item>
                <TextField 
                type="text"
                name="name"
                label="Name" 
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                />
                </Grid>
                <Grid item>
                <TextField 
                type="text"
                name="email"
                label="Email" 
                error ={ emailHelper.length !== 0}
                helperText ={emailHelper}
                id="email"
                value={email}
                onChange={onChange}

                />
                </Grid>

                <Grid item>
                <TextField 
                type="text"
                label="Phone" 
                name = "phone"
                error = { phoneHelper.length !== 0}
                helperText={phoneHelper}
                id="phone"
                value={phone}
                onChange={onChange}

                />
                </Grid>

                <Grid item style={{ maxWidth:"20em"}}>
                <TextField
                className={classes.message}
                type="text"
                name = "message"
                multiline
                InputProps={{ disableUnderline: true }}
                rows={8}
                id = "message"
                value= {message}
                onChange={(event) => setMessage(event.target.value)}

                />
                </Grid>

                <Grid item  >
                <Button variant="contained" 
                style={{ textTransform:"none", background: theme.palette.common.Green, marginTop:'1em', borderRadius: 50}}
                // onClick = {onSend}
                disabled={
                    name.length === 0 ||
                    message.length === 0 ||
                    phoneHelper.length !== 0 ||
                    emailHelper.length !== 0
                }
                type="submit"
                >Send message
                <img src={airplane} alt="send" style={{ marginLeft:'0.5em'}}/>
                
                </Button>
            </Grid>

            </form>

            </Grid>


            
            
            
           
                    </Grid>
                   
                </Grid>

              

            </Grid>

            <Grid item container md={7} justify={matchSM ? "center" : undefined} className={classes.map} style={{ marginTop : '15em'}}>
            <Map /> 

            </Grid>

        </Grid>
    )


    
}

export default Contact