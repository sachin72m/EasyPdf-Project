import React from "react";
import {
  Container,
  Grid,
  Typography,
  Link,
  Box,
  TextField,
  Button,
} from "@mui/material";
import { Facebook, Instagram, LinkedIn, X } from "@mui/icons-material";
import { keyframes } from "@emotion/react";

// Heart pop-up animation
const popUp = keyframes`
  0%, 80%, 100% { transform: scale(1); opacity: 1; }
  40% { transform: scale(1.4); opacity: 0.6; }
`;

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f9fa", padding: "40px 0", marginTop: "40px" }}>
      <Container>
        
        {/* Top Section */}
        <Grid container spacing={4} alignItems="flex-start">
          
          {/* Left Side - Logo & Social Media */}
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={2}>
              <img src="/images/pdf-500.png" alt="EasyPDF Logo" width={40} height={40} style={{ marginRight: 10 }} />
              <Typography variant="h4" sx={{ fontFamily: "Algerian", color: "#FFA500", fontWeight: "bold", fontSize: "30px" }}>
                Easy
              </Typography>
              <Typography variant="h4" sx={{ fontFamily: "Algerian", color: "#8A2BE2", fontWeight: "bold", fontSize: "30px" }}>
                PDF
              </Typography>
            </Box>

            <Typography variant="body1" sx={{ fontStyle: "italic", color: "#333", marginBottom: "16px" }}>
              We make EasyPdf
            </Typography>

            <Box mt={3} display="flex" gap={2}>
              <Link href="#"><LinkedIn fontSize="large" /></Link>
              <Link href="#"><Facebook fontSize="large" /></Link>
              <Link href="#"><Instagram fontSize="large" /></Link>
              <Link href="#"><X fontSize="large" /></Link>
            </Box>
          </Grid>

          {/* Right Side - Contact Form */}
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" fontWeight="bold">Get In Touch</Typography>
            <Box mt={2} component="form" display="flex" flexDirection="column" gap={2}>
              <Box display="flex" gap={2}>
                <TextField label="First Name" variant="outlined" fullWidth />
                <TextField label="Last Name" variant="outlined" fullWidth />
              </Box>
              <TextField label="Email" variant="outlined" fullWidth />
              <TextField label="Your Message" variant="outlined" multiline rows={3} fullWidth />
              <Button variant="contained" color="primary">Submit</Button>
            </Box>
          </Grid>
        </Grid>

        {/* Bottom Copyright + Links Section */}
        <Box sx={{
          py: 2,
          mt: 4,
          backgroundColor: "#f9f9f9",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: 2,
        }}>
          
          {/* Left - Text + Animated Heart */}
          <Typography variant="body2" sx={{
            fontFamily: "Source Sans 3",
            fontSize: "16px",
            color: "#1a1a1a",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap"
          }}>
            © 2025 EasyPDF AG — Made with
            <Box component="span" sx={{
              display: "inline-block",
              mx: "4px",
              verticalAlign: "middle",
              color: "#f44336",
              width: "18px",
              height: "18px",
              animation: `${popUp} 1s ease-in-out infinite`,
            }}>
              <svg viewBox="0 0 16 16" fill="currentColor" width="100%" height="100%">
                <path d="M 2.11 2.985 a 3.77 3.77 0 0 1 2.8 -1.22 c 0.809 0 1.55 0.256 2.2 0.76 a 4.5 4.5 0 0 1 0.89 0.929 q 0.395 -0.546 0.89 -0.93 a 3.52 3.52 0 0 1 2.2 -0.758 c 1.08 0 2.075 0.433 2.8 1.219 c 0.715 0.776 1.11 1.838 1.11 2.988 c 0 1.184 -0.441 2.268 -1.389 3.411 c -0.847 1.022 -2.065 2.06 -3.475 3.262 c -0.482 0.41 -1.028 0.876 -1.595 1.372 a 0.82 0.82 0 0 1 -1.082 0 c -0.567 -0.496 -1.113 -0.961 -1.595 -1.372 c -1.41 -1.202 -2.628 -2.24 -3.476 -3.262 C 1.441 8.24 1 7.157 1 5.973 c 0 -1.15 0.394 -2.212 1.11 -2.988" />
              </svg>
            </Box>
            for the people of the internet.
          </Typography>

          {/* Right - Links */}
          <Box sx={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 2 }}>
            <Link href="#" underline="none" sx={{ color: "#000" }}>Privacy Notice</Link>
            <Link href="#" underline="none" sx={{ color: "#000" }}>Terms & Conditions</Link>
            <Link href="#" underline="none" sx={{ color: "#000" }}>Imprint</Link>
            <Link href="#" underline="none" sx={{ color: "#000" }}>Contact Us</Link>
            <Link href="#" underline="none" sx={{ display: "flex", alignItems: "center", color: "#000" }}>
              🌐 English
            </Link>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
