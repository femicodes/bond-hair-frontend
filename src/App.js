import React from 'react';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import CollectionOne from './components/CollectionOne/CollectionOne';
import CollectionTwo from './components/CollectionTwo/CollectionTwo';
import CollectionThree from './components/CollectionThree/CollectionThree';

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <CollectionOne />
      <CollectionTwo />
      <CollectionThree />
    </div>
  );
}

export default App;
