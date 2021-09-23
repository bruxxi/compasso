import React from "react";
import { GlobalState } from './global/GlobalState';
import Router from "./route/Router";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="AppContainer">
      <GlobalState>
        <Header />
        <Router />
        <Footer />
      </GlobalState>
    </div>
  );
};

export default App;
