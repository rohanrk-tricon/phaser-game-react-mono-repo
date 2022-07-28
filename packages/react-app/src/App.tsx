import React, { ReactElement } from 'react';
import { GameTwo } from '@namespace/components';
const App = (): ReactElement => {
  // const openGameOne = () =>{

  // }
  return (
    <div className="App">
      This is game 2 below <br></br>
      <GameTwo/>
      {/* <button onClick={openGameOne} >Open Game One</button> */}
    </div>
  );
};

export default App;
