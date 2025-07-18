import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  Button,
  Typography,
  Link,
  Box,
  Divider,
  FormControl,
  FormLabel,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconContainer } from "./CustomIcons";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setEmailError(true);
      setEmailErrorMessage("Invalid email format");
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!validatePassword(password)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "Password must be at least 6 characters, include uppercase, lowercase, number & special character"
      );
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F9FAFB",
      }}
    >
      <Box
        sx={{
          maxWidth: 410,
          width: "100%",
          p: 4,
          borderRadius: 4,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          backgroundColor: "#fff",
          textAlign: "center",
        }}
      >
        <Box
          mb={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", height: 45 }}>
            <Typography
              variant="h4"
              sx={{
                fontFamily: "Algerian",
                color: "#FFA500",
                fontWeight: "bold",
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
              }}
            >
              PDF
            </Typography>
          </Box>
        </Box>

        <Typography variant="h4" fontWeight="620" gutterBottom mt={1}>
          Sign in
        </Typography>

        <form onSubmit={handleSubmit}>
          <FormControl fullWidth margin="normal">
            <FormLabel htmlFor="email" sx={{ textAlign: "left" }}>
              Email
            </FormLabel>
            <TextField
              error={emailError}
              helperText={emailErrorMessage}
              id="email"
              type="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              autoFocus
              required
              fullWidth
              variant="outlined"
              color={emailError ? "error" : "primary"}
              InputProps={{
                sx: {
                  borderRadius: 3,
                  // Removed fixed height: 40px
                  boxSizing: "border-box", // Added box-sizing
                },
              }}
            />
          </FormControl>

          <FormControl fullWidth margin="normal">
            <FormLabel htmlFor="password" sx={{ textAlign: "left" }}>
              Password
            </FormLabel>
            <TextField
              error={passwordError}
              helperText={passwordErrorMessage}
              name="password"
              placeholder="••••••••"
              type={showPassword ? "text" : "password"}
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              fullWidth
              variant="outlined"
              color={passwordError ? "error" : "primary"}
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
          </FormControl>

          <Box display="flex" alignItems="center" mb={1}>
            <Checkbox value="remember" color="primary" />
            <Typography>Remember me</Typography>
          </Box>

          <Button
            type="Submit"
            variant="contained"
            fullWidth
            // sx={{
            //   backgroundColor: "#000",
            //   color: "#fff",
            //   borderRadius: 3,
            //   fontSize: "0.9rem",
            //   textTransform: "none",
            //   ":hover": { backgroundColor: "#333" },
            // }}
            sx={{
              background: "linear-gradient(to right, #667eea, #764ba2)", // Tailwind gradient
              color: "#fff",
              borderRadius: 3,
              textTransform: "none",
              mt: 2,
              height: 36,
              fontSize: "0.9rem",
              type: "Submit",
              "&:hover": {
                background: "linear-gradient(to right, #764ba2, #667eea)",
              },
            }}
          >
            Sign in
          </Button>
        </form>

        <Box textAlign="center" mt={2}>
          <Link
            component="button"
            type="button"
            variant="body2"
            sx={{
              textDecoration: "underline",
              fontSize: "1rem",
              fontWeight: "400",
              color: "#000",
              "&:hover": { textDecoration: "none" },
            }}
          >
            Forgot your password?
          </Link>
        </Box>

        <Divider sx={{ my: 3 }}>or</Divider>

        <IconContainer
          onGoogleSignIn={() => alert("Sign in with Google")}
          onLinkedInSignIn={() => alert("Sign in with LinkedIn")}
        />

        <Box mt={2}>
          <Typography>
            Don't have an account?{" "}
            <Link
              component="button"
              onClick={() => navigate("/signup")}
              sx={{
                textDecoration: "underline",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Sign up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SignIn;

