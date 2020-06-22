import React from 'react';
import useTheme from '@material-ui/styles/useTheme'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-maps'

export default function Map() {

    const theme = useTheme();
    const matchXS = useMediaQuery(theme.breakpoints.down("xs"))
    const GoogleMapExample = withGoogleMap( props => (
        <GoogleMap
        defaultCenter = {{ lat :44.640640000, lng : -63.578290000}}
        defaultZoom = {10}
        >
        {props.isMarkerShown && <Marker position={{lat :44.640640000, lng : -63.578290000}}/>}
        </GoogleMap>
    ))
    return (
        <div>
           <GoogleMapExample 
           isMarkerShown
           containerElement= {<div style={{ height: `450px`, width:'500px', maxWidth : matchXS ? "24em" : undefined}}/>}
            mapElement ={ <div style={{height:`100%`}}/>}
           />
               
        </div>
    )
}
