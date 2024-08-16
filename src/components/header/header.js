import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  CodeOutlined,
  PictureOutlined,
  LinkOutlined,
  TableOutlined,
  GlobalOutlined,
  FileTextOutlined,
  SaveOutlined,
  OrderedListOutlined,
  TagOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Switch, Typography } from "antd";
import styles from "./header.module.css";

const { Header, Sider, Content } = Layout;

const menuItems = [
  { label: "HtmlStudy", key: "/", icon: <HomeOutlined /> },
  {
    label: "Visual Studio Code",
    key: "/devtools/vscode",
    icon: <CodeOutlined />,
  },
  {
    label: "HTML Section",
    type: "group",
    children: [
      { label: "기본문서구조", key: "/html/basic", icon: <FileTextOutlined /> },
      {
        label: "텍스트서식",
        key: "text",
        icon: <TagOutlined />,
        children: [
          { label: "P 태그", key: "/html/paragraph", icon: <TagOutlined /> },
          { label: "HnGroup태그", key: "/html/hngroup", icon: <TagOutlined /> },
          {
            label: "비주류 태그 01",
            key: "/html/oftentag",
            icon: <TagOutlined />,
          },
          {
            label: "비주류 태그 02",
            key: "/html/oftentag02",
            icon: <TagOutlined />,
          },
        ],
      },
      {
        label: "이미지 다루기",
        key: "/html/images",
        icon: <PictureOutlined />,
      },
      { label: "링크 다루기", key: "/html/anchor", icon: <LinkOutlined /> },
      {
        label: "목록",
        key: "list",
        icon: <OrderedListOutlined />,
        children: [
          { label: "ol태그", key: "/html/ollist", icon: <TagOutlined /> },
          { label: "ul태그", key: "/html/ullist", icon: <TagOutlined /> },
        ],
      },
      { label: "피규어 태그", key: "/html/figure", icon: <SaveOutlined /> },
      { label: "표만들기", key: "/html/table", icon: <TableOutlined /> },
      {
        label: "폼 요소",
        key: "form",
        children: [
          {
            label: "폼 태그들",
            key: "/html/formoption",
            icon: <TagOutlined />,
          },
          {
            label: "폼 태그들2",
            key: "/html/formoption2",
            icon: <TagOutlined />,
          },
        ],
      },
      {
        label: "시멘틱 태그",
        key: "/html/semantictag",
        icon: <GlobalOutlined />,
      },
    ],
  },
  {
    label: "CSS Section",
    type: "group",
    children: [
      { label: "CSS 기본문법", key: "/css/intro", icon: <GlobalOutlined /> },
      {
        label: "CSS 선택자",
        key: "cssSelector",
        children: [
          { label: "선택자01", key: "/css/selector", icon: <TagOutlined /> },
          { label: "선택자02", key: "/css/selector2", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 텍스트서식",
        key: "cssFont",
        children: [
          { label: "font01", key: "/css/font01", icon: <TagOutlined /> },
          { label: "font02", key: "/css/font02", icon: <TagOutlined /> },
          { label: "font03", key: "/css/font03", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 텍스트 쉐도우",
        key: "cssShadow",
        children: [
          { label: "shadow01", key: "/css/shadow01", icon: <TagOutlined /> },
          { label: "shadow02", key: "/css/shadow02", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 목록스타일",
        key: "cssListStyle",
        children: [
          { label: "ullist01", key: "/css/ullist01", icon: <TagOutlined /> },
          { label: "ullist02", key: "/css/ullist02", icon: <TagOutlined /> },
        ],
      },
      { label: "CSS 파비콘", key: "/css/favicon", icon: <GlobalOutlined /> },
    ],
  },
];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const siderRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths.length > 2) {
      const item = paths[2];
      menuItems.forEach((menuItem) => {
        if (menuItem.children) {
          menuItem.children.forEach((subItem) => {
            if (subItem.key.includes(item)) {
              setScrollPosition((prev) => ({
                ...prev,
                [menuItem.label]: true,
              }));
            }
          });
        }
      });
    }
  }, [location]);

  useEffect(() => {
    const savedPosition = localStorage.getItem("siderScrollPosition");
    if (savedPosition) {
      setScrollPosition(parseInt(savedPosition, 10));
    }
  }, []);

  useEffect(() => {
    if (siderRef.current) {
      siderRef.current.scrollTop = scrollPosition;
    }
  }, [scrollPosition, collapsed]);

  useEffect(() => {
    const savedPosition = localStorage.getItem("siderScrollPosition");
    if (savedPosition) {
      const position = parseInt(savedPosition, 10);
      setScrollPosition(position);
      if (siderRef.current) {
        siderRef.current.scrollTop = position;
      }
    }
  }, [location.pathname]);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        ref={siderRef}
        collapsible
        collapsed={collapsed}
        onCollapse={setCollapsed}
        theme="light"
        style={{ background: "#f0eefa" }}
      >
        <Menu
          theme="light"
          defaultSelectedKeys={["/"]}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => handleNavigate(key)}
        />
      </Sider>

      <Layout>
        <Header className={styles.header}>
          <div className={styles.toggleButton}>
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              style={{ marginRight: "8px" }}
            />
            <Typography className={styles.mode} variant="body1">
              {isDarkMode ? "🌞 라이트 모드" : "🌙 다크 모드"}
            </Typography>
          </div>
        </Header>
        <Content style={{ margin: "0", padding: "24px" }}>
          {/* 여기에 페이지 컨텐츠를 추가하세요 */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
