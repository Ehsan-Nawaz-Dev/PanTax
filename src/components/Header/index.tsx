import type { FC } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "@components/Logo";
import { APP_ROUTES } from "@constants/index";
import {
  appBarSx,
  toolbarSx,
  logoLinkSx,
  navSx,
  navLinkSx,
  navCenterSx,
  actionsSx,
  signUpButtonSx,
  menuIconButtonSx,
  drawerSx,
} from "@styles/components/header.styles";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Product", path: "#product" },
  { label: "Pricing", path: "#pricing" },
  { label: "Resources", path: "#resources" },
  { label: "Contact", path: "#contact" },
];

const Header: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => setMobileOpen((prev) => !prev);

  // Check if we are on the register page to change the auth button text
  const isRegisterPage = location.pathname.includes("register");
  const headerButtonText = isRegisterPage ? "Log In" : "Sign Up";
  const headerButtonLink = isRegisterPage ? APP_ROUTES.LOGIN : APP_ROUTES.REGISTER;

  const navContent = (
    <Box component="nav" sx={navSx}>
      {NAV_LINKS.map(({ label, path }) => (
        <Typography
          key={label}
          component={path.startsWith("#") ? "a" : Link}
          to={path.startsWith("#") ? undefined : path}
          href={path.startsWith("#") ? path : undefined}
          variant="body1"
          sx={navLinkSx}
        >
          {label}
        </Typography>
      ))}
    </Box>
  );

  return (
    <>
      <AppBar position="sticky" elevation={0} sx={appBarSx}>
        <Toolbar disableGutters sx={toolbarSx}>
          <Box component={Link} to="/" sx={logoLinkSx}>
            <Logo />
          </Box>

          <Box sx={navCenterSx}>{navContent}</Box>

          <Box sx={actionsSx}>
            <Button
              component={Link}
              to={headerButtonLink}
              variant="outlined"
              size="medium"
              sx={signUpButtonSx}
            >
              {headerButtonText}
            </Button>
            <IconButton
              aria-label="open menu"
              onClick={handleDrawerToggle}
              sx={menuIconButtonSx}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={drawerSx}
      >
        <List>
          {NAV_LINKS.map(({ label, path }) => (
            <ListItem key={label} disablePadding>
              <ListItemButton
                component={path.startsWith("#") ? "a" : Link}
                to={path.startsWith("#") ? undefined : path}
                href={path.startsWith("#") ? path : undefined}
                onClick={handleDrawerToggle}
              >
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to={headerButtonLink}
              onClick={handleDrawerToggle}
            >
              <ListItemText primary={headerButtonText} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
