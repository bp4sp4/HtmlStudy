import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
    position: "relative",
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
  { name: "기본문서구조", path: "/HTML5/basic", icon: <HtmlIcon /> },
  {
    name: "텍스트서식",
    path: "/text/paragraph",
    icon: <AbcIcon />,
    subItems: [
      {
        name: "P 태그",
        path: "/text/paragraph",
        icon: <Tag />,
      },
      {
        name: "HnGroup태그",
        path: "/text/hngroup",
        icon: <Tag />,
      },
      {
        name: "비주류 태그 01 ",
        path: "/text/oftentag",
        icon: <Tag />,
      },
      {
        name: "비주류 태그 02 ",
        path: "/text/oftentag02",
        icon: <Tag />,
      },
    ],
  },
  {
    name: "이미지 다루기",
    path: "/devtools/vscode",
    exact: true,
    icon: <ImageIcon />,
  },
  {
    name: "링크 다루기",
    path: "/devtools/vscode",
    exact: true,
    icon: <AddLinkIcon />,
  },
];

const Header = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
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
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  };

  const handleSubMenuClick = (name) => {
    setOpenSubMenu((prevOpenSubMenu) => ({
      ...prevOpenSubMenu,
      [name]: !prevOpenSubMenu[name],
    }));
  };

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
          <Typography variant="h6" noWrap component="div">
            <h1 className={styles.main__title}>&lt; HtmlStudy /&gt;</h1>
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
            background: "#d2d2d2 !important",
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
          {menuItems.map((item) => (
            <React.Fragment key={item.name}>
              <ListItem disablePadding>
                <ListItemButton
                  component={item.subItems ? "div" : NavLink}
                  to={item.subItems ? undefined : item.path}
                  exact={item.exact}
                  activeClassName={styles.active}
                  onClick={
                    item.subItems
                      ? () => handleSubMenuClick(item.name)
                      : undefined
                  }
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
        <Divider />
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
        <Typography variant="body1" sx={{ ml: 1 }}>
          {isDarkMode ? "🌞 라이트 모드" : "🌙 다크 모드"}
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;
