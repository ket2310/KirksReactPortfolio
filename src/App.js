import React, { useState } from 'react';
import Navigation from './components/Navigation';
import MyHeader from './components/MyHeader'

function App() {
  const [currentPg, setPage] = useState('AboutMe')
  return (
    <div>
      <MyHeader />
      <Navigation currentPg={currentPg} setPage={setPage} />
    </div>
  );
}

export default App;
