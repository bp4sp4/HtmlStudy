import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Switch,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Home from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";
import HtmlIcon from "@mui/icons-material/Html";
import ImageIcon from "@mui/icons-material/Image";
import AddLinkIcon from "@mui/icons-material/AddLink";
import ListIcon from "@mui/icons-material/List";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TableRowsIcon from "@mui/icons-material/TableRows";
import InputIcon from "@mui/icons-material/Input";
import WebIcon from "@mui/icons-material/Web";
import CssIcon from "@mui/icons-material/Css";
import Tag from "@mui/icons-material/Tag";
import logoimg from "./logo.png";
import styles from "./header.module.css";
import Drawer from "@mui/material/Drawer";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const menuItems = [
  { name: "HtmlStudy", path: "/", exact: true, icon: <Home /> },
  {
    name: "Visual Studio Code",
    path: "/devtools/vscode",
    exact: true,
    icon: <CodeIcon />,
  },
  { name: "HTML Section", type: "header" },
  { name: "기본문서구조", path: "/html/basic", icon: <HtmlIcon /> },
  {
    name: "텍스트서식",
    path: "/text/paragraph",
    icon: <Tag />,
    subItems: [
      { name: "P 태그", path: "/html/paragraph", icon: <Tag /> },
      { name: "HnGroup태그", path: "/html/hngroup", icon: <Tag /> },
      { name: "비주류 태그 01", path: "/html/oftentag", icon: <Tag /> },
      { name: "비주류 태그 02", path: "/html/oftentag02", icon: <Tag /> },
    ],
  },
  { name: "이미지 다루기", path: "/html/images", icon: <ImageIcon /> },
  { name: "링크 다루기", path: "/html/anchor", icon: <AddLinkIcon /> },
  {
    name: "목록",
    path: "/html/ollist",
    icon: <ListIcon />,
    subItems: [
      { name: "ol태그", path: "/html/ollist", icon: <Tag /> },
      { name: "ul태그", path: "/html/ullist", icon: <Tag /> },
    ],
  },
  { name: "피규어 태그", path: "/html/figure", icon: <SaveAsIcon /> },
  { name: "표만들기", path: "/html/table", icon: <TableRowsIcon /> },
  {
    name: "폼 요소",
    path: "/html/formoption",
    icon: <InputIcon />,
    subItems: [
      { name: "폼 태그들", path: "/html/formoption", icon: <Tag /> },
      { name: "폼 태그들2", path: "/html/formoption2", icon: <Tag /> },
    ],
  },
  { name: "시멘틱 태그", path: "/html/semantictag", icon: <WebIcon /> },
  { name: "CSS Section", type: "header" },
  { name: "CSS 기본문법", path: "/css/intro", icon: <CssIcon /> },
  {
    name: "CSS 선택자",
    path: "/css/selector",
    icon: <CssIcon />,
    subItems: [
      { name: "선택자01", path: "/css/selector", icon: <Tag /> },
      { name: "선택자02", path: "/css/selector2", icon: <Tag /> },
    ],
  },
  {
    name: "CSS 텍스트서식",
    path: "/css/font01",
    icon: <CssIcon />,
    subItems: [
      { name: "font01", path: "/css/font01", icon: <Tag /> },
      { name: "font02", path: "/css/font02", icon: <Tag /> },
      { name: "font03", path: "/css/font03", icon: <Tag /> },
    ],
  },
  {
    name: "CSS 텍스트 쉐도우",
    path: "/css/shadow01",
    icon: <CssIcon />,
    subItems: [
      { name: "shadow01", path: "/css/shadow01", icon: <Tag /> },
      { name: "shadow02", path: "/css/shadow02", icon: <Tag /> },
    ],
  },
  {
    name: "CSS 목록스타일",
    path: "/css/shadow01",
    icon: <CssIcon />,
    subItems: [
      { name: "ullist01", path: "/css/ullist01", icon: <Tag /> },
      { name: "ullist02", path: "/css/ullist02", icon: <Tag /> },
    ],
  },
  { name: "CSS 파비콘", path: "/css/favicon", icon: <CssIcon /> },
];

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});
  const drawerRef = useRef(null);
  const scrollPosition = useRef(0);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  const handleSubMenuClick = (name) => {
    setOpenSubMenu((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  useEffect(() => {
    // Restore scroll position when drawer opens
    if (drawerRef.current) {
      drawerRef.current.scrollTop = scrollPosition.current;
    }
  }, [open]);

  const handleDrawerScroll = () => {
    if (drawerRef.current) {
      scrollPosition.current = drawerRef.current.scrollTop;
    }
  };

  useEffect(() => {
    const paths = location.pathname.split("/");
    if (paths.length > 2) {
      const item = paths[2];
      menuItems.forEach((menuItem) => {
        if (menuItem.subItems) {
          menuItem.subItems.forEach((subItem) => {
            if (subItem.path.includes(item)) {
              setOpenSubMenu((prev) => ({
                ...prev,
                [menuItem.name]: true,
              }));
            }
          });
        }
      });
    }
  }, [location]);

  return (
    <Box sx={{ position: "absolute", minHeight: "100vh" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "60px",
            }}
          >
            <a href="/HtmlStudy">
              <img
                className={styles.logoimg}
                src={logoimg}
                width="230px"
                alt="logo"
              />
            </a>
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#f0eefa !important",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        ref={drawerRef}
        onScroll={handleDrawerScroll}
      >
        <DrawerHeader>
          <IconButton onClick={() => setOpen(false)}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem>
            <ListItemText
              primary={"Intro"}
              primaryTypographyProps={{
                display: "flex",
                variant: "p",
                fontSize: "13px",
                fontWeight: "bold",
              }}
            />
          </ListItem>
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              {item.type === "header" && (
                <>
                  <Divider />
                  <ListItem>
                    <ListItemText
                      primary={item.name === "HTML Section" ? "HTML5" : "CSS3"}
                      primaryTypographyProps={{
                        variant: "p",
                        fontSize: "11px",
                        fontWeight: "bold",
                      }}
                    />
                  </ListItem>
                </>
              )}
              {item.type !== "header" && (
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={(e) => {
                      if (item.subItems) {
                        e.stopPropagation();
                        handleSubMenuClick(item.name);
                      } else {
                        e.preventDefault();
                        handleNavigate(item.path);
                      }
                    }}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                    {item.subItems ? (
                      openSubMenu[item.name] ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )
                    ) : null}
                  </ListItemButton>
                </ListItem>
              )}
              {item.subItems && (
                <Collapse
                  in={openSubMenu[item.name]}
                  timeout="auto"
                  unmountOnExit
                >
                  <List component="div" disablePadding>
                    {item.subItems.map((subItem) => (
                      <ListItem key={subItem.name} disablePadding>
                        <ListItemButton
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigate(subItem.path);
                          }}
                          sx={{ pl: 4 }}
                        >
                          <ListItemIcon>{subItem.icon}</ListItemIcon>
                          <ListItemText primary={subItem.name} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              )}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <Box
        sx={{
          position: "fixed",
          top: 60,
          right: 0,
          display: "flex",
          alignItems: "center",
          p: 2,
          zIndex: theme.zIndex.drawer + 1,
        }}
      >
        <Switch
          checked={isDarkMode}
          onChange={toggleDarkMode}
          inputProps={{ "aria-label": "dark mode switch" }}
        />
        <Typography className={styles.mode} variant="body1" sx={{ ml: 1 }}>
          {isDarkMode ? "🌞 라이트 모드" : "🌙 다크 모드"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
