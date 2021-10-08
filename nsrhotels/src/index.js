import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';

const App = () => {
  return (
    <div>
      <Header/>
      <h1>Rooms</h1>
    </div>
  )
} 

ReactDOM.render(<App/>, document.getElementById('hotels'));