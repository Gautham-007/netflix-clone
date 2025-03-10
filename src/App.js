import React from 'react';
import NavBar from './Components/NavBar/NavBar';
import {originals, action, comedy, horror, romance, documentaries, animation, drama, thriller} from './urls'
import './App.css';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals}title='Netflix Originals'/>
      <RowPost url={action}title='Action' isSmall/>
      <RowPost url={comedy} title="Comedy" isSmall />
      <RowPost url={horror} title="Horror" isSmall />
      <RowPost url={romance} title="Romance" isSmall />
      <RowPost url={documentaries} title="Documentaries" isSmall />
      <RowPost url={animation} title="Animation" isSmall />
      <RowPost url={drama} title="Drama" isSmall />
      <RowPost url={thriller} title="Thriller" isSmall />
    </div>
  );
}

export default App;
