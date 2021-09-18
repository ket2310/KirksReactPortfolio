import React, { useState } from 'react';
import MainContainer from './components/MainContainer';

function App() {
  const [currentPg, setPage] = useState('AboutMe')
  return (
    <div>
      <MainContainer
        currentPg={currentPg} setPage={setPage}>
      </MainContainer>
    </div>
  );
}

export default App;
