import React, { useContext, useEffect } from 'react';
import { useToasts } from 'react-toast-notifications';
import { Store } from './contexts';
import { fetchCollections } from './actions';
import Header from './components/Header/Header';
import Jumbotron from './components/Jumbotron/Jumbotron';
import CollectionOne from './components/CollectionOne/CollectionOne';
import CollectionTwo from './components/CollectionTwo/CollectionTwo';
import CollectionThree from './components/CollectionThree/CollectionThree';
import MidJumbotron from './components/MidJumbotron';
import Socials from './components/Socials';
import Footer from './components/Footer';

function App() {
  const { state, dispatch } = useContext(Store);
  const { addToast } = useToasts();

  useEffect(() => {
    try {
      fetchCollections(dispatch);
    } catch (error) {
      addToast(error.message, {
        appearance: 'warning',
        autoDismiss: true,
      })
    }
  }, [dispatch, addToast]);

  return (
    <div>
      <Header />
      <Jumbotron />
      <CollectionOne />
      <CollectionTwo />
      <CollectionThree />
      <MidJumbotron />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
