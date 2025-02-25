import { useState } from "react";
import {
  TextField,
  Button,
  IconButton,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogin = () => {
    const { email, password } = formData;
    if (!email || !password) {
      setError("Please enter valid inputs");
      return;
    }
    setError("");
    navigate("/users");
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <Dialog open={open} onClose={() => setOpen(false)} maxWidth="xs" fullWidth>
      <DialogTitle className="text-center text-gray-800 font-semibold">
        Welcome Back
      </DialogTitle>
      <DialogContent className="p-6">
        {error && (
          <Typography className="text-red-500 text-sm text-center mb-2">
            {error}
          </Typography>
        )}

        <TextField
          label="Email"
          type="email"
          fullWidth
          variant="outlined"
          margin="normal"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          fullWidth
          variant="outlined"
          margin="normal"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={togglePasswordVisibility} edge="end">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </DialogContent>
      <DialogActions className="flex flex-col p-4">
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
        >
          Login
        </Button>
        <Typography variant="body2" className="text-center text-gray-500 mt-3">
          Don't have an account?{" "}
          <Link to="/NotFound" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </Typography>
      </DialogActions>
    </Dialog>
  );
};

export default Login;
