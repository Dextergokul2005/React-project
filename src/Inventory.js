import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, TextField, Button, IconButton, List, ListItem, ListItemText, Snackbar } from '@mui/material';
import { Search, AddCircle, NotificationImportant } from '@mui/icons-material';
import './App.css';

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [product, setProduct] = useState({ name: '', stock: '', expiration: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [lowStockAlert, setLowStockAlert] = useState(false);

  const handleAddProduct = () => {
    setInventory([...inventory, { ...product, id: inventory.length + 1 }]);
    setProduct({ name: '', stock: '', expiration: '' });
    if (product.stock < 10) setLowStockAlert(true);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeAlert = () => setLowStockAlert(false);

  return (
    <div className="App">
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          {/* Inventory Form */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>Add/Update Product</Typography>
              <TextField
                label="Product Name"
                fullWidth
                margin="normal"
                value={product.name}
                onChange={(e) => setProduct({ ...product, name: e.target.value })}
              />
              <TextField
                label="Stock"
                type="number"
                fullWidth
                margin="normal"
                value={product.stock}
                onChange={(e) => setProduct({ ...product, stock: e.target.value })}
              />
              <TextField
                label="Expiration Date"
                type="date"
                fullWidth
                margin="normal"
                InputLabelProps={{ shrink: true }}
                value={product.expiration}
                onChange={(e) => setProduct({ ...product, expiration: e.target.value })}
              />
              <Button
                variant="contained"
                color="primary"
                startIcon={<AddCircle />}
                onClick={handleAddProduct}
                sx={{ mt: 2 }}
              >
                Add Product
              </Button>
            </Paper>
          </Grid>

          {/* Inventory List with Search and Filters */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h5" gutterBottom>Inventory</Typography>
              <TextField
                label="Search Products"
                fullWidth
                margin="normal"
                value={searchTerm}
                onChange={handleSearch}
                InputProps={{
                  endAdornment: (
                    <IconButton>
                      <Search />
                    </IconButton>
                  ),
                }}
              />
              <List>
                {filteredInventory.map(item => (
                  <ListItem key={item.id}>
                    <ListItemText
                      primary={`${item.name} - Stock: ${item.stock}`}
                      secondary={`Expires: ${item.expiration}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Notifications */}
      <Snackbar
        open={lowStockAlert}
        autoHideDuration={6000}
        onClose={closeAlert}
        message="Low stock alert!"
        action={
          <IconButton color="inherit" size="small" onClick={closeAlert}>
            <NotificationImportant />
          </IconButton>
        }
      />
    </div>
  );
}

export default Inventory;
