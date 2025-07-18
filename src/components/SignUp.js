import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  Typography,
  Link,
  Box,
  // Divider,
  IconButton,
  InputAdornment,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { GoogleIcon } from "./CustomIcons";
import { TypeAnimation } from "react-type-animation";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
      }}
    >
      <Paper
        elevation={6}
        sx={{
          display: "flex",
          maxWidth: "880px",
          width: "80%",
          overflow: "hidden",
          backgroundColor: "transparent",
        }}
      >
        {/* Left Side - Sign Up Form */}
        <Box
          sx={{
            width: "50%",
            padding: 5,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ fontFamily: "'Poppins', sans-serif", textAlign: "center" }}
          >
            Sign Up
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Create an account to start your journey with us.
          </Typography>
          <Button
            variant="outlined"
            fullWidth
            startIcon={<GoogleIcon />}
            sx={{
              marginY: 1,
              borderRadius: 3,
              textTransform: "none",
              color: "black",
              borderColor: "black",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                backgroundColor: "#E3F2FD", // Light blue
                transform: "scale(1.05)",
              },
            }}
          >
            Sign up with Google
          </Button>
          <Typography
            variant="body2"
            textAlign="center"
            color="textSecondary"
            sx={{ my: 1 }}
          >
            or sign up using email
          </Typography>

          <Box sx={{ display: "flex", gap: 2, width: "100%" }}>
            <TextField
              label="First Name"
              name="firstName"
              placeholder="John"
              value={formData.firstName}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                borderRadius: 3,
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />

            <TextField
              label="Last Name"
              name="lastName"
              placeholder="Doe"
              value={formData.lastName}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{
                borderRadius: 3,
                boxSizing: "border-box",
                "& .MuiOutlinedInput-root": {
                  borderRadius: 3,
                },
              }}
            />
          </Box>

          <TextField
            label="Email Address"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{
              borderRadius: 3,
              boxSizing: "border-box",
              "& .MuiOutlinedInput-root": {
                borderRadius: 3,
              },
            }}
          />
          <TextField
            label="Password"
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            InputProps={{
              sx: { borderRadius: 3, boxSizing: "border-box" }, // Removed fixed height: 40px, added box-sizing
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Box display="flex" alignItems="center" mb={2} mt={1}>
            <Checkbox
              name="rememberMe"
              value="remember"
              checked={formData.rememberMe}
              onChange={handleChange}
              color="primary"
            />
            <Typography>Remember me</Typography>
          </Box>
          <Button
            variant="contained"
            fullWidth
            sx={{
              background: "linear-gradient(to right, #667eea, #764ba2)", // Tailwind gradient
              color: "#fff",
              borderRadius: 3,
              textTransform: "none",
              height: 36,
              fontSize: "0.9rem",
              type: "Submit",
              "&:hover": {
                background: "linear-gradient(to right, #764ba2, #667eea)",
              },
            }}
          >
            Sign Up
          </Button>

          <Box textAlign="center"  mt={2}>
            <Typography>
              Already have an account?{" "}
              <Link
                component="button"
                onClick={() => navigate("/signin")}
                sx={{
                  textDecoration: "underline",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Sign In
              </Link>
            </Typography>
          </Box>
        </Box>
        {/* Right Side - Animated Text */}
        <Box
          sx={{
            width: "50%",
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 165, 0, 0.5), rgba(255, 140, 0, 0.6) 40%, rgba(255, 120, 0, 0.8) 80%)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              height: "60%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <TypeAnimation
              sequence={[
                "Welcome To EasyPDF",
                2000,
                "We Make PDF Easy For You!",
                3000,
              ]}
              speed={50}
              repeat={Infinity}
              cursor={true}
              style={{
                color: "#8A2BE2",
                fontSize: "2.5rem",
                fontWeight: "bold",
                fontFamily: "'Poppins', sans-serif",
                textAlign: "center",
              }}
            />
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default SignUp;

//************************************************************************* */
