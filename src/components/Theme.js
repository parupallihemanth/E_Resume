import { createMuiTheme } from '@material-ui/core/styles';


const portGreen = '#019031'
export default createMuiTheme({
    palette :{
        common :{
            Green : `${portGreen}`
        },
        primary : {
                main : `${portGreen}`
        },
    },

    typography : {
        h2 :{
            fontFamily:  'Raleway',
            color : `${portGreen}`
        },
        h6 :{
            fontFamily:  'Raleway',
            color : `${portGreen}`
        },
        h4 :{
            fontFamily:  'Raleway',
            color : `${portGreen}`
        },
        h3 :{
            fontFamily:  'Raleway',
            color : `${portGreen}`
        },

        body1 : {
            fontSize : '1.25rem',
            fontWeight : 700,
            fontStyle : 'italic'
        },
        body2 : {
            fontSize : '1.25rem', 
            fontFamily:  'Raleway',
        }
    },
    overrides: {
        MuiInputLabel :{
            root :{
                color : portGreen,
                fontSize : '1rem'
            }
        },
        MuiInput :{
            underline :{
                '&:before' : {
                    borderBottom : `2px solid ${portGreen}`
                },
                '&:hover:not($disabled):not($focused):not($error):before' :{
                    borderBottom : `2px solid ${portGreen}`

                }
            }
        }
      },
})

 