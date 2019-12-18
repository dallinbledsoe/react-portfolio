import React, { Component } from 'react';
import moment from "moment";


export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Dallin Bledsoe</h1>
        <h2>there ya go</h2>
        <div>
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
      </div>
    );
  }
}
