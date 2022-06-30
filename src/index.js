import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header/Header';
import Home from './Home/Home';
import './ActorData';
import ApplyForm from './practice';
import CurrentMovies from './Release/Release';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Home/>
    <div className='home-div'>
      <div className='inner-div'>
        <CurrentMovies/>
      </div>
      
      <ApplyForm />
    </div>
    
    
  </React.StrictMode>
);



