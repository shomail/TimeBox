import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import theme from '../components/styles/theme';
import GlobalStyles from '../components/styles/GlobalStyles';
import Header from '../components/Header';
import Clients from './Clients';
import FourOFour from './FourOFour';
import Home from './Home';
import Invoices from './Invoices';
import Projects from './Projects';
import Timesheet from './Timesheet';

class Page extends Component<{}> {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <Router>
            <Header />
            <div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/clients" component={Clients} />
                <Route path="/invoices" component={Invoices} />
                <Route path="/projects" component={Projects} />
                <Route path="/timesheet" component={Timesheet} />
                <Route component={FourOFour} />
              </Switch>
            </div>
          </Router>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
