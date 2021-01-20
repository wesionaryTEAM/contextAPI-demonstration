import React from 'react';
import './App.css';
import {MovieProvider} from "./MovieContext";
import Movies from './Movies';


function App() {
  return (
    <div className="App">
        <MovieProvider>
          <Movies/>
        </MovieProvider>
    </div>
  );
}

export default App;
