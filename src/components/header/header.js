import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./header.module.css";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import Switch from "@mui/material/Switch";
import AbcIcon from "@mui/icons-material/Abc";
import CodeIcon from "@mui/icons-material/Code";
import { Home, ExpandLess, ExpandMore, Tag } from "@mui/icons-material";
import HtmlIcon from "@mui/icons-material/Html";
import ImageIcon from "@mui/icons-material/Image";
import AddLinkIcon from "@mui/icons-material/AddLink";
import ListIcon from "@mui/icons-material/List";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import TableRowsIcon from "@mui/icons-material/TableRows";
import InputIcon from "@mui/icons-material/Input";
import WebIcon from "@mui/icons-material/Web";
import CssIcon from "@mui/icons-material/Css";
import logoimg from "./logo.png";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: open ? drawerWidth : 0,
  })
);

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
  // HTML Section
  {
    name: "HTML Section",
    type: "header",
  },
  { name: "기본문서구조", path: "/html/basic", icon: <HtmlIcon /> },
  {
    name: "텍스트서식",
    path: "/text/paragraph",
    icon: <AbcIcon />,
    subItems: [
      {
        name: "P 태그",
        path: "/html/paragraph",
        icon: <Tag />,
      },
      {
        name: "HnGroup태그",
        path: "/html/hngroup",
        icon: <Tag />,
      },
      {
        name: "비주류 태그 01 ",
        path: "/html/oftentag",
        icon: <Tag />,
      },
      {
        name: "비주류 태그 02 ",
        path: "/html/oftentag02",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "이미지 다루기",
    path: "/html/images",
    exact: true,
    icon: <ImageIcon />,
  },
  {
    name: "링크 다루기",
    path: "/html/anchor",
    exact: true,
    icon: <AddLinkIcon />,
  },
  {
    name: "목록",
    path: "/html/ollist",
    icon: <ListIcon />,
    subItems: [
      {
        name: "ol태그",
        path: "/html/ollist",
        icon: <Tag />,
      },
      {
        name: "ul태그",
        path: "/html/ullist",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "피규어 태그",
    path: "/html/figure",
    exact: true,
    icon: <SaveAsIcon />,
  },
  {
    name: "표만들기",
    path: "/html/table",
    exact: true,
    icon: <TableRowsIcon />,
  },
  {
    name: "폼 요소",
    path: "/html/formoption",
    icon: <InputIcon />,
    subItems: [
      {
        name: "폼 태그들",
        path: "/html/formoption",
        icon: <Tag />,
      },
      {
        name: "폼 태그들2",
        path: "/html/formoption2",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "시멘틱 태그",
    path: "/html/semantictag",
    exact: true,
    icon: <WebIcon />,
  },
  // CSS Section
  {
    name: "CSS Section",
    type: "header",
  },
  {
    name: "CSS 기본문법",
    path: "/css/intro",
    exact: true,
    icon: <CssIcon />,
  },
  {
    name: "CSS 선택자",
    path: "/css/selector",
    icon: <CssIcon />,
    subItems: [
      {
        name: "선택자01",
        path: "/css/selector",
        icon: <Tag />,
      },
      {
        name: "선택자02",
        path: "/css/selector2",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "CSS 텍스트서식",
    path: "/css/font01",
    icon: <CssIcon />,
    subItems: [
      {
        name: "font01",
        path: "/css/font01",
        icon: <Tag />,
      },
      {
        name: "font02",
        path: "/css/font02",
        icon: <Tag />,
      },
      {
        name: "font03",
        path: "/css/font03",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "CSS 텍스트 쉐도우",
    path: "/css/shadow",
    exact: true,
    icon: <CssIcon />,
  },
];

const Header = () => {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState({});

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    }
  };

  const handleSubMenuClick = (name) => {
    setOpenSubMenu((prevOpenSubMenu) => ({
      ...prevOpenSubMenu,
      [name]: !prevOpenSubMenu[name],
    }));
  };

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");
    if (savedScrollPosition) {
      window.scrollTo(0, parseInt(savedScrollPosition, 10));
    }

    const openMenu = () => {
      const handleScroll = () => {
        sessionStorage.setItem("scrollPosition", window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };

    openMenu();
  }, [location]);

  return (
    <Box
      sx={{ position: "absolute", flexDirection: "column", minHeight: "100vh" }}
    >
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
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
              height: "60px", // Adjust based on actual height
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
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
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
          {menuItems.map((item, index) => (
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
                    component={item.subItems ? "div" : NavLink}
                    to={item.subItems ? undefined : item.path}
                    exact={item.exact}
                    activeClassName={styles.active}
                    onClick={(e) => {
                      if (item.subItems) {
                        e.stopPropagation();
                        handleSubMenuClick(item.name);
                      }
                      sessionStorage.setItem("scrollPosition", window.scrollY);
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
                          component={NavLink}
                          to={subItem.path}
                          exact={subItem.exact}
                          activeClassName={styles.active}
                          sx={{ pl: 4 }}
                          onClick={() =>
                            sessionStorage.setItem(
                              "scrollPosition",
                              window.scrollY
                            )
                          }
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
      <Main open={open}>
        <DrawerHeader />
      </Main>
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
