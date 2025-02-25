import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
  Grid,
} from "@mui/material";
import { Settings as SettingsIcon } from "lucide-react";

const SettingsModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* 🔷 Title */}
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center", display: "flex", alignItems: "center", gap: 1 }}>
        <SettingsIcon size={22} /> Settings
      </DialogTitle>

      <DialogContent dividers sx={{ p: 3 }}>
        <Grid container spacing={2}>
          {/* 🟢 Profile Settings */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Profile
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Full Name" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Email Address" variant="outlined" />
          </Grid>

          {/* 🔵 Preferences */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Preferences
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Switch />} label="Enable Dark Mode" />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel control={<Switch />} label="Receive Notifications" />
          </Grid>

          {/* 🔴 Security */}
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold">
              Security
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="New Password" type="password" variant="outlined" />
          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth label="Confirm Password" type="password" variant="outlined" />
          </Grid>
        </Grid>
      </DialogContent>

 
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={onClose} color="primary" >
          Save 
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SettingsModal;
