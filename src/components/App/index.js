import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Header, ProjectPage, AboutPage, Footer } from '../';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App container">
          <div className="mt-5">
            <Header />
          </div>
          <div className="my-5">
            <Route exact path="/portfolio" component={ProjectPage} />
            <Route path="/portfolio/about" component={AboutPage} />
          </div>
          <div className="mb-5">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;