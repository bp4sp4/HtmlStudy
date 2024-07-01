import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Paragraph from "./paragraph/paragraph";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/header/header" element={<Header />} />
        <Route path="/paragraph/paragraph" element={<Paragraph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
