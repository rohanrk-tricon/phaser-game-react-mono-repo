import React, { ReactElement } from 'react';
import { GameTwo } from '@namespace/game-two';
const App = (): ReactElement => {
  // const openGameOne = () =>{

  // }
  return (
    <div className="App">
      Hi I am App. This is game 2 below <br></br>
      <GameTwo/>
      {/* <button onClick={openGameOne} >Open Game One</button> */}
    </div>
  );
};

export default App;
