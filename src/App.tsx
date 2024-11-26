import { useState } from 'react';
import './App.scss';
import BurgerMenu from './components/BurgerMenu';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenBurgerMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <BurgerMenu isOpen={isOpen} onOpen={handleOpenBurgerMenu} />
      <Header onOpen={handleOpenBurgerMenu} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
