import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter, Route, Switch} from 'react-router-dom';


import Header from './Header';
import theme from './Theme';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
      
      <Header />
      <Switch>
      <Route  path="/"       exact    component={Home} />
      <Route  path="/about"           component={About}/>
      <Route  path="/skills"          component={Skills}/>
      <Route  path = '/contact'       component={Contact} />
      {/* <Route component={() => <p> Sorry, page not found</p>}/> */}
      </Switch>
      </BrowserRouter>
      
      
      

    </ThemeProvider>
    
  );
}

export default App