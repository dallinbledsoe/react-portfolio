import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./pages/auth"
import NavigationContainer from "./navigation/navigation-container";
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Contact from "./pages/contact";
import PortfolioDetail from "./portfolio/portfolio-detail";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    }
    this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
    this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
  }
  
  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
  }
  
  handleUnsuccessfulAuth() {
    this.props.handleUnsuccessfulLogin();
  }

  render() {
    return (
      <div className='container'>
        <Router>
          <div>
        <NavigationContainer />
        
            <Switch>
              <Route exact path="/" component={Home} />
              <Route 
              path="/auth" 
              render={props => (
                <Auth{...props}
                handleSuccessfulLogin={this.handleSuccessfulLogin}
                handleUnsuccessfulLogin={this.handleUnsuccessfulLogin}
                />
              )}
               />
              <Route path="/about-me" component={About} />
              <Route path="/blog" component={Blog} />
              <Route path="/contact" component={Contact} />
              <Route path="/portfolio/:slug" component={PortfolioDetail} />
              <Route component={NoMatch} />
            </Switch>
</div>
        </Router>

      
      </div>
    );
  }
}
