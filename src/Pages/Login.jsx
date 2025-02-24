import { useState } from "react";
import { TextField, Button, IconButton, InputAdornment, Card, CardContent, Typography } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-sm shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <Typography variant="h5" className="text-center font-semibold text-gray-800 mb-4">
            Welcome Back
          </Typography>
          
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
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
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

          <Button variant="contained" color="primary" fullWidth className="mt-4 py-2 text-lg rounded-lg">
            Login
          </Button>

          <Typography variant="body2" className="text-center text-gray-500 p-3 mt-4">
            Don't have an account? <span className="text-blue-600 cursor-pointer">Sign up</span>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
