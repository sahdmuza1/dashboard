import { useState } from "react";
import { Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Card, CardContent, Typography, CardActions } from "@mui/material";
import { ShoppingCart, Edit, Delete } from "@mui/icons-material";

const Sales = () => {
  const [sales, setSales] = useState([
    { id: 1, product: "Laptop", amount: 50000, date: "2025-02-22" },
  ]);

  const [modalType, setModalType] = useState(null);
  const [selectedSale, setSelectedSale] = useState(null);
  const [formData, setFormData] = useState({ product: "", amount: "", date: "" });

  const openModal = (type, sale = null) => {
    setModalType(type);
    setSelectedSale(sale);
    setFormData(sale ? { product: sale.product, amount: sale.amount, date: sale.date } : { product: "", amount: "", date: "" });
  };

  const closeModal = () => {
    setModalType(null);
    setSelectedSale(null);
    setFormData({ product: "", amount: "", date: "" });
  };

  const handleAddSale = () => {
    if (formData.product && formData.amount && formData.date) {
      setSales([...sales, { id: Date.now(), ...formData }]);
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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Sales Overview</h2>

      <div className="flex justify-end mb-6">
        <Button variant="contained" color="primary" size="large" onClick={() => openModal("add")}>
          + Add Sale
        </Button>
      </div>

      {/* Card Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sales.length > 0 ? (
          sales.map((sale) => (
            <Card key={sale.id} className="shadow-lg rounded-xl hover:shadow-2xl transition-shadow bg-white">
              <CardContent>
                <div className="flex items-center space-x-4 mb-3">
                  <ShoppingCart className="text-blue-500" fontSize="large" />
                  <Typography variant="h6" className="font-semibold text-gray-900">{sale.product}</Typography>
                </div>
                <Typography variant="body1" className="text-gray-700 font-medium">Amount: <span className="text-blue-600 font-bold">₹{sale.amount}</span></Typography>
                <Typography variant="body2" className="text-gray-500">Date: {sale.date}</Typography>
              </CardContent>
              <CardActions className="flex justify-between px-4 pb-4">
                <Button startIcon={<Edit />} variant="outlined" color="warning" size="small" onClick={() => openModal("edit", sale)}>
                  Edit
                </Button>
                <Button startIcon={<Delete />} variant="outlined"color="error" size="small" onClick={() => openModal("delete", sale)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))
        ) : (
          <Typography variant="body1" className="text-gray-500 text-center col-span-full">No sales records found</Typography>
        )}
      </div>

      {/* Dialog for Add/Edit/Delete */}
      <Dialog open={!!modalType} onClose={closeModal} maxWidth="sm" fullWidth>
        <DialogTitle>
          {modalType === "add" ? "Add New Sale" : modalType === "edit" ? "Edit Sale" : "Delete Sale"}
        </DialogTitle>
        <DialogContent>
          {modalType !== "delete" ? (
            <>
              <TextField
                label="Product"
                fullWidth
                margin="dense"
                value={formData.product}
                onChange={(e) => setFormData({ ...formData, product: e.target.value })}
              />
              <TextField
                label="Amount (₹)"
                type="number"
                fullWidth
                margin="dense"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
              />
              <TextField
                label="Date"
                type="date"
                fullWidth
                margin="dense"
                InputLabelProps={{ shrink: true }}
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </>
          ) : (
            <Typography>Are you sure you want to delete {selectedSale?.product}?</Typography>
          )}
        </DialogContent>
        <DialogActions>
          {modalType === "add" && <Button onClick={handleAddSale} color="primary" variant="outlined">Add</Button>}
          {modalType === "edit" && <Button onClick={handleEditSale} color="success" variant="outlined">Save</Button>}
          <Button onClick={closeModal} color="secondary" variant="outlined">Cancel</Button>
          {modalType === "delete" && <Button onClick={handleDeleteSale} color="error" variant="outlined">Delete</Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Sales;
