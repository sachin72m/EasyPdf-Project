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
import "@fontsource/poppins"; // Default weight 400
import Footer from "./Footer"; // Assuming you have a Footer component
import { motion } from "framer-motion";
import { Link , useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown"; // Your Dropdown component
import { KeyboardArrowUp, KeyboardArrowDown, Apps } from "@mui/icons-material";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [open, setOpen] = useState(false); // State to control dropdown visibility

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
      // It's usually good to close the dropdown if the user scrolls,
      // as it might look strange if it stays open when the page scrolls.
      setOpen(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleToggleDropdown = () => {
    setOpen((prev) => !prev);
  };

  // Click outside handler for the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the button and the dropdown panel
      if (
        open &&
        event.target.closest(".tools-dropdown-button") === null &&
        event.target.closest(".tools-dropdown-panel-container") === null
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const buttonRoutes = {
    Compress: "/compress-pdf",
    Convert: "/convert-pdf",
    Edit: "/edit-pdf", // example: update this to your actual path
  };

const navigate = useNavigate(); // ✅ Called at the top level

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full bg-white shadow-md transition-all duration-300 ${
          isSticky ? "py-2 backdrop-blur-lg bg-opacity-90" : "py-4"
        }`}
        style={{ position: "relative", zIndex: 1000 }} // Ensure this is positioned correctly for absolute dropdown
      >
        <AppBar
          position="static" // AppBar itself can be static within the motion.nav
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
                // The Box for the dropdown button and inline buttons should be flexible
                // to push the right-side buttons to the end.
                flexGrow: 1,
                justifyContent: "center", // Center these items
              }}
            >
              {/* Tools Dropdown Button */}
              <Button
                onClick={handleToggleDropdown}
                className="tools-dropdown-button" // Add a class for click outside detection
                sx={{
                  color: "blue", // Changed from black for visibility in screenshot
                  fontWeight: "bold",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "white",
                  },
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

              {/* Inline Buttons: Compress, Convert, Edit */}
              {["Compress", "Convert", "Edit"].map((item) => (
                <Button
                  key={item}
                  component={Link}
                  // to={`/${item.toLowerCase()}`}
                  to={buttonRoutes[item]} // Use mapped path
                  sx={{
                    color: "black",
                    fontWeight: "bold",
                    textTransform: "none",
                    "&:hover": {
                      backgroundColor: "#FFA500",
                      color: "white",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>

            {/* Right Side Buttons */}
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
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "white",
                  },
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
                  "&:hover": {
                    backgroundColor: "#FFA500",
                    color: "white",
                  },
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
            {/* Mobile Menu */}
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

        {/* This is the key change: Render Dropdown directly inside motion.nav */}
        {open && (
          <Box className="tools-dropdown-panel-container">
            {" "}
            {/* Add class for click outside */}
            <Dropdown />
          </Box>
        )}
      </motion.nav>

      {/* Hero Section Added Below Navbar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
          padding: "30px 20px",
          marginTop: "64px", // Add margin to avoid overlap with fixed navbar
        }}
      >
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                color: "#000",
                fontSize: { xs: "30px", md: "52px" },
              }}
            >
              We make PDF easy.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#333",
                fontSize: "18px",
                marginTop: "18px",
              }}
            >
              All the tools you’ll need to be more productive and work smarter
              with documents.
            </Typography>
            <Box sx={{ marginTop: "25px", display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#8A2BE2",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: "17px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textTransform: "none",
                }}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outlined"
                 onClick={() => navigate("/all-pdf-tools")}
                sx={{
                  color: "#8A2BE2",
                  borderColor: "#8A2BE2",
                  fontWeight: "bold",
                  fontSize: "17px",
                  padding: "10px 20px",
                  borderRadius: "8px",
                  textTransform: "none",
                  "&:hover": { backgroundColor: "#8A2BE2", color: "white" },
                }}
              >
                Explore All PDF Tools
              </Button>
            </Box>
          </Box>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
          <Box
            component="img"
            src="/images/We Make PDFEasy.png"
            alt="PDF Editing UI"
            sx={{
              maxWidth: "680px",
              width: "100%",
              marginTop: { xs: "25px", md: "0" },
            }}
          />
        </motion.div>
      </Box>
      {/* New Section: "Keep Your Simple Tasks Simple" */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          maxWidth: "750px", // Adjusted width for consistent alignment
          margin: "60px auto", // Balanced top and bottom margin
          padding: "0 20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold",
            color: "#000",
            fontSize: { xs: "26px", md: "36px" },
            maxWidth: "650px", // Ensuring heading width matches paragraph
            lineHeight: "1.3",
          }}
        >
          Keep Your Simple Tasks Simple
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontFamily: "Inter, sans-serif",
            color: "#333",
            fontSize: "18px",
            marginTop: "10px",
            maxWidth: "650px", // Matching heading width for perfect alignment
            lineHeight: "1.6",
          }}
        >
          EasyPDF is the first and only PDF software you’ll love. We have all
          the tools you’ll need to start, manage, and finish your work with
          digital documents.
        </Typography>
      </Box>
      {/* New Section: "Work Directly on Your Files" */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
          padding: "60px 20px",
          gap: { xs: 4, md: 10 },
        }}
      >
        {/* Text Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Box sx={{ maxWidth: "500px" }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                color: "#000",
                fontSize: { xs: "26px", md: "36px" },
                lineHeight: "1.3",
              }}
            >
              Work Directly on Your Files
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#333",
                fontSize: "18px",
                marginTop: "10px",
                lineHeight: "1.6",
              }}
            >
              Do more than just view PDFs. Highlight and add text, images,
              shapes, and freehand annotations to your documents. You can
              connect to 20 other tools to enhance your files further.
            </Typography>
            <Button
              onClick={() => navigate("/all-pdf-tools")}
              sx={{
                marginTop: "12px",
                color: "#0057FF",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "18px",
                position: "relative",
                display: "inline-block",
                paddingBottom: "3px",
                padding: "0",
                minWidth: "auto",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#0057FF",
                },
              }}
            >
              Edit a PDF now →
            </Button>
          </Box>
        </motion.div>
        <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
          {/* Image Section (Replace src with your image) */}
          <Box
            component="img"
            src="/images/WorkOnDirectly.png" // Update this with your actual image path
            alt="Work Directly on Your Files"
            sx={{
              maxWidth: "645px",
              width: "100%",
              marginTop: { xs: "25px", md: "0" },
            }}
          />
        </motion.div>
      </Box>

      {/* Digital Signatures Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" }, // Stack in mobile, row in desktop
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
          padding: "60px 20px",
          gap: { xs: 4, md: 10 },
        }}
      >
        {/* Left Side - Image */}
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Box
            component="img"
            src="/images/e-Sign.png" // Update this with your actual image path
            alt="Digital Signatures"
            sx={{
              maxWidth: "645px",
              width: "100%",
              marginTop: { xs: "25px", md: "0" },
            }}
          />
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
          <Box
            sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                color: "#000",
                fontSize: { xs: "26px", md: "36px" },
                lineHeight: "1.3",
              }}
            >
              Digital Signatures Made Easy
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#333",
                fontSize: "18px",
                marginTop: "10px",
                lineHeight: "1.6",
              }}
            >
              Fill in forms, e-sign contracts, and close deals in a few simple
              steps. You can also request e-signatures and track your document
              every step of the way.
            </Typography>
            <Button
              onClick={() => navigate("/all-pdf-tools")}
              sx={{
                marginTop: "12px",
                color: "#0057FF",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "18px",
                position: "relative",
                padding: "0",
                minWidth: "auto",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#0057FF",
                },
              }}
            >
              Try eSign →
            </Button>
          </Box>
        </motion.div>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1200px",
          margin: "auto",
          padding: "60px 20px",
          gap: { xs: 4, md: 10 },
        }}
      >
        {/* Left Side - Text Content */}
        <motion.div initial="hidden" animate="visible" variants={fadeInLeft}>
          <Box
            sx={{ maxWidth: "500px", textAlign: { xs: "center", md: "left" } }}
          >
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Inter, sans-serif",
                fontWeight: "bold",
                color: "#000",
                fontSize: { xs: "26px", md: "36px" },
                lineHeight: "1.3",
              }}
            >
              Create the Perfect Document
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Inter, sans-serif",
                color: "#333",
                fontSize: "18px",
                marginTop: "10px",
                lineHeight: "1.6",
              }}
            >
              File too big? Compress it. Need a specific format? Convert it.
              Things getting chaotic? Merge and split files, or remove excess
              pages. EasyPDF has it all.
            </Typography>
            <Button
              onClick={() => navigate("/all-pdf-tools")}
              sx={{
                marginTop: "12px",
                color: "#0057FF",
                fontWeight: "bold",
                textTransform: "none",
                fontSize: "18px",
                position: "relative",
                padding: "0",
                minWidth: "auto",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: "2px",
                  left: 0,
                  width: "100%",
                  height: "2px",
                  backgroundColor: "#0057FF",
                },
              }}
            >
              View all PDF tools →
            </Button>
          </Box>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeInRight}>
          {/* Right Side - Image */}
          <Box
            component="img"
            src="/images/PerfectDocument.png" // Update with the correct image path
            alt="Create the Perfect Document"
            sx={{
              maxWidth: "645px",
              width: "100%",
              marginTop: { xs: "25px", md: "0" },
            }}
          />
        </motion.div>
      </Box>
      <Footer />
    </>
  );
};

export default Navbar;
