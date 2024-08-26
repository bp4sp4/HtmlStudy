import React from "react";
import Router from "./components/route";
import "./styles/theme.css";
import "primereact/resources/themes/saga-blue/theme.css"; // or any other theme you prefer
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./index.css"; // Your custom styles if any
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <div>
      <Router />
      <Footer />
    </div>
  );
};

export default App;
