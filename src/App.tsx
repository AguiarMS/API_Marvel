import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Characters from './pages/Characters';
import GlobalStyle from './styles/global';


const App: React.FC = () => {

  return (
    <>
      <Header />
      <Search />
      <Characters />
      <GlobalStyle />
    </>
  );
}

export default App;
