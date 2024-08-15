import React, { useEffect } from "react";
import GlobelStyles from "./styles/globelStyle";

const App = () => {
  return (
    <>
      <GlobelStyles />
      Hello world
      <img
        src="https://qaxavbjszwpinaetgrxd.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg"
        alt=""
      />
    </>
  );
};

export default App;
