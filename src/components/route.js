import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Paragraph from "./paragraph/paragraph";
import Basic from "./HTML5/basic";
import Vscode from "./devtools/vscode";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/devtools/vscode" element={<Vscode />} />
        <Route path="/HTML5/basic" element={<Basic />} />
        <Route path="/header/header" element={<Header />} />
        <Route path="/paragraph/paragraph" element={<Paragraph />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
