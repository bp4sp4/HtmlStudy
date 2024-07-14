import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Paragraph from "./text/paragraph";
import Basic from "./HTML5/basic";
import Vscode from "./devtools/vscode";
import Hngroup from "./text/hngroup";
import Oftentag from "./text/oftentag";
import Mark from "./text/oftentag02";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/devtools/vscode" element={<Vscode />} />
        <Route path="/HTML5/basic" element={<Basic />} />
        <Route path="/header/header" element={<Header />} />
        <Route path="/text/paragraph" element={<Paragraph />} />
        <Route path="/text/hngroup" element={<Hngroup />} />
        <Route path="/text/Oftentag" element={<Oftentag />} />
        <Route path="/text/oftentag02" element={<Mark />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
