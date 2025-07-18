// AllPdfTools.jsx
import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/poppins";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { KeyboardArrowUp, KeyboardArrowDown, Apps } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const AllPdfTools = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false);

  const buttonRoutes = {
    Compress: "/compress-pdf",
    Convert: "/convert-pdf",
    Edit: "/edit-pdf",
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      setOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);
  const handleToggleDropdown = () => setOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        open &&
        !event.target.closest(".tools-dropdown-button") &&
        !event.target.closest(".tools-dropdown-panel-container")
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <>
      {/* Navbar Section */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isSticky ? "py-2 backdrop-blur-lg bg-opacity-90" : "py-4"
        }`}
        style={{ position: "relative", zIndex: 1000 }}
      >
        <AppBar
          position="static"
          sx={{
            backgroundColor: "white",
            boxShadow: isSticky ? "0px 4px 10px rgba(0, 0, 0, 0.1)" : "none",
            borderBottom: isSticky ? "none" : "1px solid #ddd",
            width: "100%",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            {/* Logo and Title */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 0.7,
                height: "55px",
              }}
            >
              <img
                src="/images/pdf-500.png"
                alt="EasyPDF Logo"
                style={{ height: "50px" }}
              />
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Algerian",
                  color: "#FFA500",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                Easy
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "Algerian",
                  color: "#8A2BE2",
                  fontWeight: "bold",
                  fontSize: "30px",
                }}
              >
                PDF
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              <Button
                onClick={handleToggleDropdown}
                className="tools-dropdown-button"
                sx={{
                  color: "blue",
                  fontWeight: "bold",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": { backgroundColor: "#FFA500", color: "white" },
                }}
              >
                <Apps fontSize="small" />
                Tools
                {open ? (
                  <KeyboardArrowUp fontSize="small" />
                ) : (
                  <KeyboardArrowDown fontSize="small" />
                )}
              </Button>

              {["Compress", "Convert", "Edit"].map((item) => (
                <Button
                  key={item}
                  component={Link}
                  to={buttonRoutes[item]}
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "#FFA500", color: "white" },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                gap: 2,
                alignItems: "center",
              }}
            >
              <Button
                component={Link}
                to="/signup"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#FFA500", color: "white" },
                }}
              >
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/signin"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#FFA500", color: "white" },
                }}
              >
                Log In
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8A2BE2",
                  color: "white",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Free Trial
              </Button>
            </Box>

            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ display: { xs: "block", md: "none" }, color: "black" }}
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              {[
                "Tools",
                "Compress",
                "Convert",
                "Edit",
                "Sign Up",
                "Log In",
              ].map((item) => (
                <MenuItem key={item} onClick={handleMenuClose}>
                  {item}
                </MenuItem>
              ))}
              <MenuItem>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#0057FF",
                    color: "white",
                    fontWeight: "bold",
                    textTransform: "none",
                  }}
                >
                  Free Trial
                </Button>
              </MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
        {open && (
          <Box className="tools-dropdown-panel-container">
            <Dropdown />
          </Box>
        )}
      </motion.nav>

      {/* Tools Content */}
      <Box sx={{ marginTop: "110px", padding: "40px 20px" }}>
        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: "bold",
            fontFamily: "Inter, sans-serif",
            color: "#1a1a1a",
            mb: 2,
            fontSize: { xs: "30px", md: "52px" },
          }}
        >
          All EasyPDF Tools
        </Typography>
        <Typography
          variant="h6"
          align="center"
          sx={{
            color: "#1a1a1a",
            fontWeight: 400,
            fontFamily:
              "'Source Sans 3', 'Adjusted Arial Fallback', sans-serif",
            maxWidth: "800px",
            margin: "0 auto",
            lineHeight: 1.4,
            fontSize: { xs: "25px", md: "25px" },
          }}
        >
          Make use of our collection of PDF tools to process digital documents
          and streamline your workflow seamlessly.
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 3,
            justifyContent: "center",
            maxWidth: "1000px",
            margin: "40px auto",
          }}
        >
          <Box
            component={Link}
            to="/compress-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  // backgroundColor: "#FF5C5C",
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Compress.svg"
                  alt="Compress PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>

              <Box>
                <Typography sx={{ fontWeight: "bold", color: "#000" }}>
                  Compress PDF
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Reduce the size of your PDF without losing quality
                </Typography>
              </Box>
            </Box>

            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          <Box
            component={Link}
            to="/convert-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/PDF Convert.svg"
                  alt="Convert PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  PDF Converter
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert Word, PowerPoint, and Excel files to and from PDF
                </Typography>
              </Box>
            </Box>

            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Unlock PDF */}
          <Box
            component={Link}
            to="/unlock-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Unlock PDF.svg"
                  alt="Unlock PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Unlock PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Remove passwords, encryption and permission from your PDF
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Protect PDF */}
          <Box
            component={Link}
            to="/protect-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Protect PDF.svg"
                  alt="Protect PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Protect PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Add a password and encrypt your PDF file
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Merge PDF */}
          <Box
            component={Link}
            to="/merge-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Merge-PDF.svg"
                  alt="Merge PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Merge PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Combine multiple PDFs into one unified document
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Split PDF */}
          <Box
            component={Link}
            to="/split-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Split-PDF.svg"
                  alt="Split PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Split PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Extract pages from your PDF or save each page as a separate
                  PDF
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Rotate PDF */}
          <Box
            component={Link}
            to="/rotate-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Rotate-PDF.svg"
                  alt="Rotate PDF icon"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Rotate PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Rotate one or all pages in your PDF
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Delete PDF Pages */}
          <Box
            component={Link}
            to="/delete-pages-from-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Delete-PDF-Pages.svg"
                  alt="Delete PDF Pages"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Delete PDF Pages
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Remove one or multiple pages from your PDF
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* PDF to Word */}
          <Box
            component={Link}
            to="/pdf-to-word"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Pdf-Word.svg"
                  alt="Pdf to Word"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>PDF to Word</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert PDFs to editable Word documents
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* PDF to Excel */}
          <Box
            component={Link}
            to="/pdf-to-excel"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Pdf-Excel.svg"
                  alt="Pdf to Excel"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  PDF to Excel
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert PDFs to editable Excel spreadsheets
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* PDF to PPT */}
          <Box
            component={Link}
            to="/pdf-to-ppt"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/pdf-PPT.svg"
                  alt="Pdf to PPT"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>PDF to PPT</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert PDFs to editable PowerPoint presentations
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* PDF to JPG */}
          <Box
            component={Link}
            to="/pdf-to-jpg"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/pdf-Jpg.svg"
                  alt="Pdf to JPG"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>PDF to JPG</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Extract images from your PDF or save each page as a separate
                  image
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Word to PDF */}
          <Box
            component={Link}
            to="/word-to-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Pdf-Word.svg"
                  alt="Word to PDF"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>Word to PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert Word documents to PDF files
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* Excel to PDF */}
          <Box
            component={Link}
            to="/excel-to-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/Pdf-Excel.svg"
                  alt="Excel to PDF"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>
                  Excel to PDF
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert Excel spreadsheets to PDF documents
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* PPT to PDF */}
          <Box
            component={Link}
            to="/ppt-to-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/pdf-PPT.svg"
                  alt="PPT to PDF"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>PPT to PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Convert PowerPoint presentations to PDF documents
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>

          {/* JPG to PDF */}
          <Box
            component={Link}
            to="/jpg-to-pdf"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "12px 16px",
              textDecoration: "none",
              color: "inherit",
              backgroundColor: "#FAFAFA",
              minWidth: "280px",
              maxWidth: "320px",
              height: "90px",
              transition: "box-shadow 0.3s ease",
              "&:hover": {
                boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              },
            }}
          >
            {/* Left: Icon + Text */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  color: "white",
                  borderRadius: "4px",
                  padding: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minWidth: "40px",
                  height: "40px",
                }}
              >
                <img
                  src="/images/pdf-Jpg.svg"
                  alt="JPG to PDF"
                  style={{ width: "35px", height: "35px" }}
                />
              </Box>
              <Box>
                <Typography sx={{ fontWeight: "bold" }}>JPG to PDF</Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "#555", fontSize: "15px" }}
                >
                  Transform JPG, PNG, BMP, GIF, and TIFF images to PDF
                </Typography>
              </Box>
            </Box>
            {/* Right: Arrow Icon */}
            <ArrowForwardIosIcon sx={{ fontSize: "16px", color: "#555" }} />
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};

export default AllPdfTools;
