// App.jsx

import React from "react";
import "./App.css";
import Header from "./component/headerPage";
import Main from "./component/bodyPage"; // Importing the Main component
import Footer from "./component/footerPage";

function App() {
  return (
    <>
      <div>
        <Header />
        <Main /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
