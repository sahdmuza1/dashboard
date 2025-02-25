import { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Card,
  CardContent,
  CardHeader,
  Typography,
  IconButton,
  Avatar,
  Tooltip,
} from "@mui/material";
import { Edit, Delete, PersonAdd } from "@mui/icons-material";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const Users = () => {
  const [users, setUsers] = useState([
    { id: crypto.randomUUID(), name: "Sahad", email: "sahd@gmail.com" },
    { id: crypto.randomUUID(), name: "Kendrick", email: "lamar@gmail.com" },
    { id: crypto.randomUUID(), name: "Sah", email: "sahd@gmail.com" },
  ]);

  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openModal = (type, user = null) => {
    setModalType(type);
    setSelectedUser(user);
    setFormData(user ? { name: user.name, email: user.email } : { name: "", email: "" });
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedUser(null);
    setFormData({ name: "", email: "" });
  };

  const handleAddUser = () => {
    if (formData.name.trim() && formData.email.trim()) {
      setUsers([...users, { id: crypto.randomUUID(), ...formData }]);
      closeModal();
    }
  };

  const handleEditUser = () => {
    setUsers(users.map((user) => (user.id === selectedUser.id ? { ...user, ...formData } : user)));
    closeModal();
  };

  const handleDeleteUser = () => {
    setUsers(users.filter((user) => user.id !== selectedUser.id));
    closeModal();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      {/* ✅ Fixed Navbar */}
      <div className="fixed w-full z-10 bg-white shadow-sm">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      <div className="flex flex-1 pt-16">
        {/* ✅ Sidebar */}
        <div className={`transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-0 hidden"} md:block bg-white shadow-md`}>
          <Sidebar />
        </div>

        {/* ✅ Users Section */}
        <div className="flex-1 p-10 overflow-auto">
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {users.map((user) => (
              <Card key={user.id} className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200 p-6">
                <CardHeader
                  avatar={<Avatar>{user.name.charAt(10)}</Avatar>}
                  title={<Typography className="font-medium text-gray-800">{user.name}</Typography>}
                  subheader={<Typography className="text-gray-600">{user.email}</Typography>}
                />
                {/* ✅ Buttons at Bottom Left and Right */}
                <CardContent className="mt-auto flex justify-between px-4 pb-4">
                  <Tooltip title="Edit">
                    <IconButton color="primary" onClick={() => openModal("edit", user)}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete">
                    <IconButton color="error" onClick={() => openModal("delete", user)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="contained" color="primary" startIcon={<PersonAdd />} onClick={() => openModal("add")}>
              Add User
            </Button>
          </div>
        </div>
      </div>

      {/* ✅ Modal Dialog */}
      <Dialog open={!!modalType} onClose={closeModal} maxWidth="sm" fullWidth>
        <DialogTitle>
          {modalType === "add" ? "Add New User" : modalType === "edit" ? "Edit User" : "Delete User"}
        </DialogTitle>
        <DialogContent>
          {modalType !== "delete" ? (
            <>
              <TextField label="Name" fullWidth margin="dense" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              <TextField label="Email" fullWidth margin="dense" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </>
          ) : (
            <Typography>Are you sure you want to delete {selectedUser?.name}?</Typography>
          )}
        </DialogContent>
        <DialogActions>
          {modalType === "add" && <Button onClick={handleAddUser} color="primary">Add</Button>}
          {modalType === "edit" && <Button onClick={handleEditUser} color="success" >Save</Button>}
          <Button onClick={closeModal} color="secondary">Cancel</Button>
          {modalType === "delete" && <Button onClick={handleDeleteUser} color="error">Delete</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
