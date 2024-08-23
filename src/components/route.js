import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./main/main";
import Header from "./header/header";
import Paragraph from "./html/paragraph";
import Basic from "./html/basic";
import Vscode from "./devtools/vscode";
import Hngroup from "./html/hngroup";
import Oftentag from "./html/oftentag";
import Mark from "./html/oftentag02";
import Images from "./html/images";
import Anchor from "./html/anchor";
import Ollist from "./html/ollist";
import UlList from "./html/ullist";
import Figure from "./html/figure";
import Table from "./html/table";
import Formoption from "./html/formoption";
import Formoption2 from "./html/formoption2";
import Semantictag from "./html/semantictag";
import Cssintro from "./css/intro";
import Selector from "./css/selector";
import Selector2 from "./css/selector2";
import Font01 from "./css/font01";
import Font02 from "./css/font02";
import Font03 from "./css/font03";
import Shadow01 from "./css/shadow01";
import Shadow02 from "./css/shadow02";
import Ullist01 from "./css/ullist01";
import Ullist02 from "./css/ullist02";
import Favicon from "./css/favicon";
import Background from "./css/background";
import Element from "./css/elements";
import Float from "./css/float";
import Display from "./css/display";
import Position01 from "./css/position";
import Fixed from "./css/fixed";
import Absolute from "./css/absolute";
import Hover from "./css/hover";
import FirstLastChild from "./css/FirstLastChild";
import Focus from "./css/focus";
import Placeholder from "./css/placeholder";
import Checked from "./css/checked";
import BeforeAfter01 from "./css/beforeafter01";
import NthOfType from "./css/nth-of-type";
import NthChild from "./css/nthchild";
import BeforeAfter02 from "./css/beforeafter02";
import BeforeAfter03 from "./css/beforeafter03";
import Flex from "./css/flex";

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/devtools/vscode" element={<Vscode />} />
        <Route path="/html/basic" element={<Basic />} />
        <Route path="/header/header" element={<Header />} />
        <Route path="/html/paragraph" element={<Paragraph />} />
        <Route path="/html/hngroup" element={<Hngroup />} />
        <Route path="/html/Oftentag" element={<Oftentag />} />
        <Route path="/html/oftentag02" element={<Mark />} />
        <Route path="/html/images" element={<Images />} />
        <Route path="/html/anchor" element={<Anchor />} />
        <Route path="/html/ollist" element={<Ollist />} />
        <Route path="/html/ullist" element={<UlList />} />
        <Route path="/html/figure" element={<Figure />} />
        <Route path="/html/table" element={<Table />} />
        <Route path="/html/formoption" element={<Formoption />} /> ㅇ ㅂ
        <Route path="/html/formoption2" element={<Formoption2 />} />
        <Route path="/html/semantictag" element={<Semantictag />} />
        <Route path="/css/intro" element={<Cssintro />} />
        <Route path="/css/selector" element={<Selector />} />
        <Route path="/css/selector2" element={<Selector2 />} />
        <Route path="/css/font01" element={<Font01 />} />
        <Route path="/css/font02" element={<Font02 />} />
        <Route path="/css/font03" element={<Font03 />} />
        <Route path="/css/shadow01" element={<Shadow01 />} />
        <Route path="/css/shadow02" element={<Shadow02 />} />
        <Route path="/css/ullist01" element={<Ullist01 />} />
        <Route path="/css/ullist02" element={<Ullist02 />} />
        <Route path="/css/favicon" element={<Favicon />} />
        <Route path="/css/background" element={<Background />} />
        <Route path="/css/element" element={<Element />} />
        <Route path="/css/display" element={<Display />} />
        <Route path="/css/float" element={<Float />} />
        <Route path="/css/position01" element={<Position01 />} />
        <Route path="/css/fixed" element={<Fixed />} />
        <Route path="/css/absolute" element={<Absolute />} />
        <Route path="/css/hover" element={<Hover />} />
        <Route path="/css/firstlastchild" element={<FirstLastChild />} />
        <Route path="/css/nthchild" element={<NthChild />} />
        <Route path="/css/nthoftype" element={<NthOfType />} />
        <Route path="/css/focus" element={<Focus />} />
        <Route path="/css/placeholder" element={<Placeholder />} />
        <Route path="/css/checked" element={<Checked />} />
        <Route path="/css/BeforeAfter01" element={<BeforeAfter01 />} />
        <Route path="/css/BeforeAfter02" element={<BeforeAfter02 />} />
        <Route path="/css/BeforeAfter03" element={<BeforeAfter03 />} />
        <Route path="/css/flex" element={<Flex />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
