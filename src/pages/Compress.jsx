import React, { useState, useEffect, useRef } from "react"; // Added useRef
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Box,
  Snackbar, // Added Snackbar
  Alert, // Added Alert
  Stack, // Added Stack
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Apps from "@mui/icons-material/Apps"; // Added Apps icon
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp"; // Added KeyboardArrowUp icon
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown"; // Added KeyboardArrowDown icon
import CheckCircleIcon from "@mui/icons-material/CheckCircle"; // Added CheckCircleIcon
import "@fontsource/poppins";
import Footer from "../components/Footer";
import Dropdown from "../components/Dropdown";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Define the Compress functional component
const Compress = () => {
  // <--- This is where your component starts
  const [isSticky, setIsSticky] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false); // State for the dropdown
  const fileInputRef = useRef(null); // Ref for file input

  // State for alert messages
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Handle file change (example placeholder)
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file.name);
      setAlert({
        open: true,
        message: `File selected: ${file.name}`,
        severity: "info",
      });
      // Add your file processing logic here
    }
  };

  // Handle click to open file input
  const handleClick = () => {
    fileInputRef.current.click();
  };

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

      {/* Main Compress Section */}
      <Box
        sx={{
          height: "60vh",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: 10,
        }}
      >
        <Box
          sx={{ width: "100%", maxWidth: "1150px", textAlign: "center", p: 3 }}
        >
          <Typography variant="h4" fontWeight="bold" mb={4}>
            Compress PDF
          </Typography>

          <Box
            sx={{
              width: "100%",
              maxWidth: "1400px",
              height: "290px",
              backgroundColor: "#f92129",
              borderRadius: "8px",
              position: "relative",
              mx: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: 10,
                bottom: 10,
                left: 10,
                right: 10,
                border: "2px dashed white",
                borderRadius: "8px",
              }}
            />
            <input
              type="file"
              hidden
              ref={fileInputRef}
              accept=".pdf"
              onChange={handleFileChange}
            />
            <img
              src="/images/MorePdfIcons.svg"
              alt="Upload Icon"
              style={{ width: 85, height: 85, marginBottom: 15 }}
            />
            <Button
              variant="contained"
              sx={{
                backgroundColor: "white",
                color: "black",
                fontWeight: "bold",
                textTransform: "uppercase",
                display: "flex",
                alignItems: "center",
                px: 4,
                py: 1.5,
                borderRadius: "5px",
                "&:hover": { backgroundColor: "#f0f0f0" },
              }}
              onClick={handleClick}
            >
              <img
                src="/images/SinglePdfIcon.svg"
                alt="PDF Icon"
                style={{ width: 35, height: 23, marginRight: 10 }}
              />
              Choose Files
            </Button>
            <Typography sx={{ color: "white", mt: 2, fontSize: "18px" }}>
              or drop files here
            </Typography>
          </Box>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 10,
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="body1"
              sx={{ maxWidth: 500, textAlign: "left" }}
            >
              Compress PDFs online for quick sharing, fast uploads, and optimal
              storage—quality intact. The compressor is free to use and works
              directly in your browser.
            </Typography>
            <Box>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography>PDF size reduction up to 99%</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1} mb={1}>
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography>GDPR and ISO/IEC 27001 compliant</Typography>
              </Stack>
              <Stack direction="row" alignItems="center" spacing={1}>
                <CheckCircleIcon sx={{ color: "green" }} />
                <Typography>Fully browser-based PDF compression</Typography>
              </Stack>
            </Box>
          </Box>

          <Snackbar
            open={alert.open}
            autoHideDuration={4000}
            onClose={() => setAlert({ ...alert, open: false })}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              severity={alert.severity}
              onClose={() => setAlert({ ...alert, open: false })}
              sx={{ fontWeight: "bold" }}
            >
              {alert.message}
            </Alert>
          </Snackbar>
        </Box>
      </Box>
      <Footer />
    </>
  );
}; // <--- This is where your component ends

export default Compress;

// import React, { useRef, useState } from "react";
// import { Box, Typography, Button, Snackbar, Alert, Stack } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// const Compress = () => {
//   const fileInputRef = useRef(null);
//   const [alert, setAlert] = useState({
//     open: false,
//     message: "",
//     severity: "success",
//   });

//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       setAlert({
//         open: true,
//         message: `File chosen: ${file.name}`,
//         severity: "success",
//       });
//     } else {
//       setAlert({
//         open: true,
//         message: "No file chosen",
//         severity: "error",
//       });
//     }
//   };

//   const handleClick = () => {
//     fileInputRef.current.click();
//   };

//   return (
//     <Box
//       sx={{
//         height: "100vh",
//         backgroundColor: "white",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           maxWidth: "1150px",
//           textAlign: "center",
//           p: 3,
//         }}
//       >
//         {/* Heading */}
//         <Typography variant="h4" fontWeight="bold" mb={4}>
//           Compress PDF
//         </Typography>

//         {/* Upload Area */}
//         <Box
//           sx={{
//             width: "100%",
//             maxWidth: "1400px",
//             height: "290px",
//             backgroundColor: "#f92129",
//             borderRadius: "8px",
//             position: "relative",
//             mx: "auto",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             overflow: "hidden",
//           }}
//         >
//           <Box
//             sx={{
//               position: "absolute",
//               top: 10,
//               bottom: 10,
//               left: 10,
//               right: 10,
//               border: "2px dashed white",
//               borderRadius: "8px",
//               pointerEvents: "none",
//             }}
//           />

//           <input
//             type="file"
//             hidden
//             ref={fileInputRef}
//             accept=".pdf"
//             onChange={handleFileChange}
//           />
//           {/* 👉 Add Image Above the Button */}
//           <img
//             src="/images/MorePdfIcons.svg"
//             alt="Upload Icon"
//             style={{ width: 85, height: 85, marginBottom: 15 }}
//           />
//           <Button
//             variant="contained"
//             sx={{
//               backgroundColor: "white",
//               color: "black",
//               fontWeight: "bold",
//               textTransform: "uppercase",
//               display: "flex",
//               alignItems: "center",
//               px: 4,
//               py: 1.5,
//               borderRadius: "5px",
//               "&:hover": { backgroundColor: "#f0f0f0" },
//             }}
//             onClick={handleClick}
//           >
//             <img
//               src="/images/SinglePdfIcon.svg"
//               alt="PDF Icon"
//               style={{ width: 35, height: 23, marginRight: 10 }}
//             />
//             Choose Files
//           </Button>

//           <Typography sx={{ color: "white", mt: 2, fontSize: "18px" }}>
//             or drop files here
//           </Typography>
//         </Box>

//         {/* Features Section (as per screenshot) */}
//         <Box
//           sx={{
//             mt: 4,
//             display: "flex",
//             flexDirection: { xs: "column", md: "row" },
//             justifyContent: "center",
//             alignItems: "flex-start",
//             gap: 10,
//             flexWrap: "wrap",
//           }}
//         >
//           {/* Left Text */}
//           <Typography variant="body1" sx={{ maxWidth: 500, textAlign: "left" }}>
//             Compress PDFs online for quick sharing, fast uploads, and optimal
//             storage—quality intact. The compressor is free to use and works
//             directly in your browser.
//           </Typography>

//           {/* Feature List */}
//           <Box>
//             <Stack direction="row" alignItems="center" spacing={1} mb={1}>
//               <CheckCircleIcon sx={{ color: "green" }} />
//               <Typography variant="body1">
//                 PDF size reduction up to 99%
//               </Typography>
//             </Stack>
//             <Stack direction="row" alignItems="center" spacing={1} mb={1}>
//               <CheckCircleIcon sx={{ color: "green" }} />
//               <Typography variant="body1">
//                 GDPR and ISO/IEC 27001 compliant
//               </Typography>
//             </Stack>
//             <Stack direction="row" alignItems="center" spacing={1}>
//               <CheckCircleIcon sx={{ color: "green" }} />
//               <Typography variant="body1">
//                 Fully browser-based PDF compression
//               </Typography>
//             </Stack>
//           </Box>
//         </Box>

//         {/* Alert Message */}
//         <Snackbar
//           open={alert.open}
//           autoHideDuration={4000}
//           onClose={() => setAlert({ ...alert, open: false })}
//           anchorOrigin={{ vertical: "top", horizontal: "center" }}
//         >
//           <Alert
//             severity={alert.severity}
//             onClose={() => setAlert({ ...alert, open: false })}
//             sx={{ fontWeight: "bold" }}
//           >
//             {alert.message}
//           </Alert>
//         </Snackbar>
//       </Box>
//     </Box>
//   );
// };

// export default Compress;
