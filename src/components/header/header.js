import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
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
    key: "/html",
    type: "group",
    children: [
      { label: "기본문서구조", key: "/html/basic", icon: <FileTextOutlined /> },
      {
        label: "텍스트서식",
        key: "/html/text",
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
        key: "/html/list",
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
        key: "/html/form",
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
    key: "/css",
    type: "group",
    children: [
      { label: "CSS 기본문법", key: "/css/intro", icon: <GlobalOutlined /> },
      {
        label: "CSS 선택자",
        key: "/css/selector",
        children: [
          { label: "선택자01", key: "/css/selector", icon: <TagOutlined /> },
          { label: "선택자02", key: "/css/selector2", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 텍스트서식",
        key: "/css/font",
        children: [
          { label: "font01", key: "/css/font01", icon: <TagOutlined /> },
          { label: "font02", key: "/css/font02", icon: <TagOutlined /> },
          { label: "font03", key: "/css/font03", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 텍스트 쉐도우",
        key: "/css/shadow",
        children: [
          { label: "shadow01", key: "/css/shadow01", icon: <TagOutlined /> },
          { label: "shadow02", key: "/css/shadow02", icon: <TagOutlined /> },
        ],
      },
      {
        label: "CSS 목록스타일",
        key: "/css/list-style",
        children: [
          { label: "ullist01", key: "/css/ullist01", icon: <TagOutlined /> },
          { label: "ullist02", key: "/css/ullist02", icon: <TagOutlined /> },
        ],
      },
      { label: "CSS 파비콘", key: "/css/favicon", icon: <GlobalOutlined /> },
      {
        label: "CSS 배경 제어하기",
        key: "/css/background",
        icon: <GlobalOutlined />,
      },
    ],
  },
];

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const siderRef = useRef(null);
  const [openKeys, setOpenKeys] = useState([]);
  const [previousPath, setPreviousPath] = useState(location.pathname);

  useEffect(() => {
    // 페이지 로드 시 저장된 사이드바 상태와 테마 복원
    const savedCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    const savedTheme = localStorage.getItem("theme");
    const savedScrollPosition = localStorage.getItem("siderScrollPosition");

    setCollapsed(savedCollapsed);
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      setIsDarkMode(savedTheme === "dark");
    }
    if (savedScrollPosition && siderRef.current) {
      siderRef.current.scrollTop = parseInt(savedScrollPosition, 10);
    }
  }, []);

  useEffect(() => {
    const paths = location.pathname.split("/").filter(Boolean);
    // eslint-disable-next-line
    const keys = paths.map(
      (_, index) => `/${paths.slice(0, index + 1).join("/")}`
    );

    const findOpenKeys = (items, path) => {
      let openKeys = [];
      items.forEach((item) => {
        if (
          item.key === path ||
          (item.children &&
            item.children.some(
              (child) => findOpenKeys([child], path).length > 0
            ))
        ) {
          openKeys.push(item.key);
          if (item.children) {
            openKeys = openKeys.concat(
              item.children.reduce((acc, child) => {
                return acc.concat(findOpenKeys([child], path));
              }, [])
            );
          }
        }
      });
      return openKeys;
    };

    const initialOpenKeys = findOpenKeys(menuItems, location.pathname);
    setOpenKeys(initialOpenKeys);
  }, [location]);

  useEffect(() => {
    if (location.pathname !== previousPath) {
      setOpenKeys((prevOpenKeys) => {
        // 현재 열려있는 서브메뉴의 상태를 저장
        const currentOpenKeys = new Set(prevOpenKeys);
        return Array.from(currentOpenKeys);
      });
    }
    setPreviousPath(location.pathname);
  }, [location, previousPath]);

  const handleNavigate = (path) => {
    navigate(path);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleOpenChange = (keys) => {
    setOpenKeys(keys);
  };

  const handleSiderScroll = () => {
    if (siderRef.current) {
      localStorage.setItem(
        "siderScrollPosition",
        siderRef.current.scrollTop.toString()
      );
    }
  };

  const handleCollapse = (collapsed) => {
    setCollapsed(collapsed);
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  };

  return (
    <Layout>
      <Sider
        ref={siderRef}
        collapsible
        collapsed={collapsed}
        onCollapse={handleCollapse}
        theme={isDarkMode ? "dark" : "light"}
        style={{
          overflowY: "auto",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
        }}
        onScroll={handleSiderScroll}
      >
        <Menu
          theme={isDarkMode ? "dark" : "light"}
          mode="inline"
          selectedKeys={[location.pathname]}
          openKeys={openKeys}
          onOpenChange={handleOpenChange}
          items={menuItems}
          onClick={({ key }) => handleNavigate(key)}
          style={{ height: "100%", borderRight: 0, overflow: "scroll" }}
        />
      </Sider>

      <Layout style={{ marginLeft: collapsed ? "80px" : "200px" }}>
        <Header className={styles.header} style={{ padding: 0 }}>
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
        <Content
          style={{ margin: "24px 16px 0", overflow: "initial" }}
        ></Content>
      </Layout>
    </Layout>
  );
};

export default App;
