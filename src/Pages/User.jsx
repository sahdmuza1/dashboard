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
} from "@mui/material";

const Users = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "Sahad", email: "sahd@gmail.com" },
  ]);

  const [modalType, setModalType] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });

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
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map((user) => (
        <Card key={user.id} className="shadow-lg rounded-lg">
          <CardHeader title={user.name} subheader={user.email} />
          <CardContent className="flex justify-between">
            <Button variant="outlined" color="warning" size="small" onClick={() => openModal("edit", user)}>
              Edit
            </Button>
            <Button variant="outlined" color="error" size="small" onClick={() => openModal("delete", user)}>
              Delete
            </Button>
          </CardContent>
        </Card>
      ))}
      <Card className="shadow-lg rounded-lg flex items-center justify-center p-6 cursor-pointer" onClick={() => openModal("add")}>      
        <Typography variant="h6" color="primary">+ Add User</Typography>
      </Card>
      
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
          {modalType === "add" && <Button onClick={handleAddUser} color="primary" variant="outlined">Add</Button>}
          {modalType === "edit" && <Button onClick={handleEditUser} color="success" variant="outlined">Save</Button>}
          <Button onClick={closeModal} color="secondary" variant="outlined">Cancel</Button>
          {modalType === "delete" && <Button onClick={handleDeleteUser} color="error" variant="outlined">Delete</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Users;
