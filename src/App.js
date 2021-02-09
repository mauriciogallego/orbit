import React from "react";
import "~/App.scss";
import Router from "~/router/index";
import Footer from "~/components/footer/index";

function App() {
  return (
    <div className="App">
      <Router />
      <Footer />
    </div>
  );
}

export default App;
