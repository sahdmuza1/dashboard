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
  Typography,
  CardActions,
  Grid,
  MenuItem,
} from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { Edit, Delete, ShoppingCart, PersonAdd } from "@mui/icons-material";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";

const Sales = () => {
  const [sales, setSales] = useState([
    { id: uuidv4(), product: "Mobile", category: "Electronics", amount: 30000, date: "2024-12-02", status: "Completed" },
    { id: uuidv4(), product: "Laptop", category: "Electronics", amount: 50000, date: "2025-02-22", status: "Pending" },
    { id: uuidv4(), product: "Mobile", category: "Electronics", amount: 30000, date: "2024-1-10", status: "Completed" },
  ]);

  const [modalType, setModalType] = useState(null);
  const [selectedSale, setSelectedSale] = useState(null);
  const [formData, setFormData] = useState({ product: "", category: "", amount: "", date: "", status: "Pending" });
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const openModal = (type, sale = null) => {
    setModalType(type);
    setSelectedSale(sale);
    setFormData(
      sale ? { product: sale.product, category: sale.category, amount: sale.amount, date: sale.date, status: sale.status }
           : { product: "", category: "", amount: "", date: "", status: "Pending" }
    );
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedSale(null);
    setFormData({ product: "", category: "", amount: "", date: "", status: "Pending" });
  };

  const handleAddSale = () => {
    if (formData.product && formData.category && formData.amount && formData.date) {
      setSales([...sales, { id: uuidv4(), ...formData }]);
      closeModal();
    }
  };

  const handleEditSale = () => {
    setSales(sales.map((sale) => (sale.id === selectedSale.id ? { ...sale, ...formData } : sale)));
    closeModal();
  };

  const handleDeleteSale = () => {
    setSales(sales.filter((sale) => sale.id !== selectedSale.id));
    closeModal();
  };

  return (
    <div className="h-screen flex flex-col bg-gray-50">
      <div className="fixed w-full z-10 shadow-md bg-white">
        <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      </div>

      <div className="flex flex-1 pt-16">
        <div className={`transition-all duration-300 ${isSidebarOpen ? "w-60" : "w-0 hidden"} md:block`}>
          <Sidebar />
        </div>

        <div className="flex-1 p-8 overflow-auto mt-5">
          <Grid container spacing={3}>
            {sales.map((sale) => (
              <Grid item xs={12} sm={6} md={4} key={sale.id}>
                <Card className="shadow-md hover:shadow-xl rounded-xl transition-shadow bg-white border border-gray-200 p-6">
                  <div className="flex justify-between items-center">
                    <ShoppingCart className="text-blue-500" fontSize="large" />
                    <Typography variant="h6" className="font-semibold text-gray-800">{sale.product}</Typography>
                  </div>
                  <CardContent>
                    <Typography variant="body2">Category: {sale.category}</Typography>
                    <Typography variant="body1">Amount: ₹{sale.amount}</Typography>
                    <Typography variant="body2">Date: {sale.date}</Typography>
                    <Typography variant="body2" className={sale.status === "Completed" ? "text-green-600" : "text-orange-600"}>
                      {sale.status}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex justify-between">
                    <Button startIcon={<Edit />}  color="primary" onClick={() => openModal("edit", sale)}>
                     
                    </Button>
                    <Button startIcon={<Delete />} color="error" onClick={() => openModal("delete", sale)}>
                    
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className="flex justify-center mt-10">
            <Button variant="contained" color="primary" startIcon={<PersonAdd />} onClick={() => openModal("add")}>
              Add Sale
            </Button>
          </div>
        </div>
      </div>

      <Dialog open={!!modalType} onClose={closeModal} maxWidth="sm" fullWidth>
        <DialogTitle>{modalType === "add" ? "Add Sale" : modalType === "edit" ? "Edit Sale" : "Delete Sale"}</DialogTitle>
        <DialogContent>
          {modalType !== "delete" ? (
            <>
              <TextField label="Product" fullWidth margin="dense" value={formData.product} onChange={(e) => setFormData({ ...formData, product: e.target.value })} />
              <TextField label="Category" fullWidth margin="dense" value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })} />
              <TextField label="Amount" fullWidth margin="dense" type="number" value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
              <TextField label="Date" fullWidth margin="dense" type="date" InputLabelProps={{ shrink: true }} value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
              <TextField select label="Status" fullWidth margin="dense" value={formData.status} onChange={(e) => setFormData({ ...formData, status: e.target.value })}>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Completed">Completed</MenuItem>
              </TextField>
            </>
          ) : (
            <Typography>Are you sure you want to delete {selectedSale?.product}?</Typography>
          )}
        </DialogContent>
        <DialogActions>
          {modalType === "add" && <Button onClick={handleAddSale} color="primary" >Add</Button>}
          {modalType === "edit" && <Button onClick={handleEditSale} color="success" >Save</Button>}
          <Button onClick={closeModal} color="secondary">Cancel</Button>
          {modalType === "delete" && <Button onClick={handleDeleteSale} color="error" >Delete</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sales;
