import React, { ReactElement } from 'react';
import { GameOne, GameTwo } from '@namespace/components';
const App = (): ReactElement => {
  const openGameOne = () =>{

  }
  return (
    <div className="App">
      <GameTwo/>
      {/* <button onClick={openGameOne} >Open Game One</button> */}
    </div>
  );
};

export default App;
