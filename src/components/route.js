import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Paragraph from "./html/paragraph";
import Basic from "./HTML5/basic";
import Vscode from "./devtools/vscode";
import Hngroup from "./html/hngroup";
import Oftentag from "./html/oftentag";
import Mark from "./html/oftentag02";
import Images from "./html/images";
import Anchor from "./html/anchor";
import Ollist from "./html/ollist";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/devtools/vscode" element={<Vscode />} />
        <Route path="/HTML5/basic" element={<Basic />} />
        <Route path="/header/header" element={<Header />} />
        <Route path="/html/paragraph" element={<Paragraph />} />
        <Route path="/html/hngroup" element={<Hngroup />} />
        <Route path="/html/Oftentag" element={<Oftentag />} />
        <Route path="/html/oftentag02" element={<Mark />} />
        <Route path="/html/images" element={<Images />} />
        <Route path="/html/anchor" element={<Anchor />} />
        <Route path="/html/ollist" element={<Ollist />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
