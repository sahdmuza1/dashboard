import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Avatar,
  TextField,
  Button,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import { Edit, Save, Cancel, CloudUpload } from "@mui/icons-material";
import profileImage from "../assets/person.jpg";

export default function ProfileModal({ open, onClose }) {
  const [formData, setFormData] = useState({
    fullName: "Sahad",
    email: "sahd@example.com",
    phone: "+123456789",
    role: "Admin",
  });

  const [editMode, setEditMode] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setSelectedImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      {/* 🔷 Title */}
      <DialogTitle sx={{ fontWeight: "bold", textAlign: "center" }}>
        Profile
      </DialogTitle>

      <DialogContent dividers sx={{ p: 3 }}>
        {/* Profile Image Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <Avatar
              src={selectedImage || profileImage}
              alt="User Avatar"
              sx={{ width: 96, height: 96 }}
              className="shadow-md"
            />
            {editMode && (
              <div className="absolute bottom-0 right-0 bg-gray-200 p-1 rounded-full shadow-md cursor-pointer">
                <input
                  accept="image/*"
                  type="file"
                  id="image-upload"
                  hidden
                  onChange={handleImageChange}
                />
                <label htmlFor="image-upload">
                  <IconButton component="span">
                    <CloudUpload fontSize="small" />
                  </IconButton>
                </label>
              </div>
            )}
          </div>

          <Typography variant="h5" className="mt-3 font-semibold text-gray-800">
            {formData.fullName}
          </Typography>
          <Typography variant="body2" className="text-gray-500">
            {formData.role}
          </Typography>
        </div>

        {/* Profile Details */}
        <Grid container spacing={2} className="mt-4">
          <Grid item xs={12}>
            <TextField
              label="Full Name"
              name="fullName"
              fullWidth
              variant="outlined"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!editMode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              fullWidth
              variant="outlined"
              value={formData.email}
              onChange={handleChange}
              disabled={!editMode}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              variant="outlined"
              value={formData.phone}
              onChange={handleChange}
              disabled={!editMode}
            />
          </Grid>
        </Grid>
      </DialogContent>

      {/* 🚀 Action Buttons */}
      <DialogActions sx={{ p: 2 }}>
        {editMode ? (
          <>
            <Button
            
              color="primary"
              
              onClick={handleSave}
            >
              Save
            </Button>
            <Button
             
              color="secondary"
              
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </>
        ) : (
          <Button
           
            color="primary"
            
            onClick={() => setEditMode(true)}
          >
            Edit
          </Button>
        )}
        <Button onClick={onClose} color="secondary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
