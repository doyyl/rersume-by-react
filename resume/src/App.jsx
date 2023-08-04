// App.jsx

import React from "react";
import "./App.css";
import Header from "./component/headerPage";
import Main from "./component/bodyPage"; // Importing the Main component
import FooterPage from "./component/footer";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main /> 
        <FooterPage />
      </div>
    </>
  );
}

export default App;
