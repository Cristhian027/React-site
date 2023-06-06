import './App.css';
import './index.css';
import Header from './Header';
import MainContent from './MainContain';
import { useState } from 'react';



function App() {

  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode(prevMode => !prevMode)
  }
  return (
    <div className='container'>
      <Header 
      darkMode={darkMode} 
      toggleDarkMode={toggleDarkMode} 
      />
      <MainContent darkMode={darkMode} />
    </div>
  );
}

export default App;
