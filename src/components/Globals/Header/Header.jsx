import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/img/logo_erika.png";
import { pathRoutes } from "../../../routes/PathRoutes";
import "./Header.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AppBar, Toolbar, Typography } from "@mui/material";

// Define los colores personalizados para el tema
const theme = createTheme({
  palette: {
    primary: {
      main: "#ff69b4", // Cambia el color primario a rojo (#ff0000)
    },
    secondary: {
      main: "#000000", // Cambia el color secundario a verde (#00ff00)
    },
  },
});

const pages = [["Home", pathRoutes.home], ["About me", pathRoutes.aboutme], ["What is woman issues?", pathRoutes.issues],["Pros & Cons", pathRoutes.proscons], ["Conclusion", pathRoutes.conclusions]];

function Header({ onPageSelect, selectedPage}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    
    <ThemeProvider theme={theme}>
    <AppBar className="container-navbar" color="primary" position="static">
      <Container maxWidth="xl" className="navbar">
        <Toolbar>
          <Link to="/">
            <Box
              className="navbar-logo"
              component="img"
              alt="Logo"
              src={Logo}
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
              }}
            />
          </Link>
          <Box
            className="navbar-responsive"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <IconButton
              className="navbar-responsive"
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="warning"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "flex", md: "none" },
              }}
            >
              {pages.map((page) => (
                 <Link className="navbar-link" to={page[1]} key={page[1]}>
                 <MenuItem id="navbar-responsive" key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page[0]}</Typography>
                  </MenuItem>
               </Link>
              ))}
            </Menu>
          </Box>
          <Link className="link-logo" to="/">
            <Box
              className="navbar-logo"
              component="img"
              alt="Logo"
              src={Logo}
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
              }}
            />
          </Link>


          <Box
            className="navbar-item"
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
               <Link className="navbar-link" to={page[1]} key={page[1]}><Button
               onClick={handleCloseNavMenu}
               sx={{ my: 2, 
                display: "block",
                borderRadius: "10em",
                backgroundColor: selectedPage === page[1] ? "white" : "transparent",
                fontSize: "17px",
                padding:"0.5em 1em",
                color: selectedPage === page[1] ? "pinkAccent" : "white",
                textTransform: "capitalize",}}
             >
               {page[0]}
             </Button>
             </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
export default Header;
