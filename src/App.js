import React from 'react';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import CollectionOne from './components/CollectionOne/CollectionOne';
import CollectionTwo from './components/CollectionTwo/CollectionTwo';
import CollectionThree from './components/CollectionThree/CollectionThree';
import MidJumbotron from './components/MidJumbotron';

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <CollectionOne />
      <CollectionTwo />
      <CollectionThree />
      <MidJumbotron />
    </div>
  );
}

export default App;
