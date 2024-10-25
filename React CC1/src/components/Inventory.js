import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, Paper, TextField, Button, IconButton, List, ListItem, ListItemText, Snackbar, Box, ThemeProvider, createTheme, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { Search, AddCircle, NotificationImportant, Delete, Sort, LocationOn, LocalPharmacy, VideoCall } from '@mui/icons-material';
import '../App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#ff5722',
    },
    background: {
      default: '#f4f6f8',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
      color: '#1976d2',
    },
    h5: {
      fontWeight: 500,
    },
    body2: {
      color: '#777',
    },
  },
});

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [product, setProduct] = useState({ name: '', stock: '', expiration: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [lowStockAlert, setLowStockAlert] = useState(false);
  const [sortCriteria, setSortCriteria] = useState('');

  const handleAddProduct = () => {
    if (product.name && product.stock && product.expiration) {
      setInventory([...inventory, { ...product, id: inventory.length + 1 }]);
      setProduct({ name: '', stock: '', expiration: '' });
      if (product.stock < 10) setLowStockAlert(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleDeleteProduct = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (event) => {
    setSortCriteria(event.target.value);
    let sortedInventory = [...inventory];
    switch (event.target.value) {
      case 'name':
        sortedInventory.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'stock':
        sortedInventory.sort((a, b) => a.stock - b.stock);
        break;
      case 'expiration':
        sortedInventory.sort((a, b) => new Date(a.expiration) - new Date(b.expiration));
        break;
      default:
        break;
    }
    setInventory(sortedInventory);
  };

  const filteredInventory = inventory.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const closeAlert = () => setLowStockAlert(false);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* Navigation Bar */}
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pharmacy Management System
            </Typography>
            <Button color="inherit">Buy Medicines</Button>
            <Button color="inherit">Find Doctors</Button>
            <Button color="inherit">Lab Tests</Button>
            <Button color="inherit">Circle Membership</Button>
            <Button color="inherit">Health Records</Button>
            <Button color="inherit">Buy Insurance</Button>
          </Toolbar>
        </AppBar>

        {/* Hero Section */}
        <Box
          sx={{
            bgcolor: theme.palette.background.default,
            py: 6,
            textAlign: 'center',
            backgroundColor: '#E0F7FA',
            color: '#1976d2',
          }}
        >
          <Typography variant="h3" gutterBottom>
            Buy Medicines and Essentials
          </Typography>
          <TextField
            placeholder="Search Medicines"
            variant="outlined"
            fullWidth
            sx={{ maxWidth: 500, mt: 3 }}
            InputProps={{
              endAdornment: (
                <IconButton>
                  <Search />
                </IconButton>
              ),
            }}
          />
          <Container sx={{ mt: 4 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={3}>
                <Button fullWidth variant="outlined" startIcon={<LocationOn />}>
                  Pharmacy Near Me
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button fullWidth variant="outlined" startIcon={<LocalPharmacy />}>
                  Get 15% off on Medicines
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button fullWidth variant="outlined" startIcon={<AddCircle />}>
                  Hospital Visit
                </Button>
              </Grid>
              <Grid item xs={12} md={3}>
                <Button fullWidth variant="outlined" startIcon={<VideoCall />}>
                  Video Consult in 15 Min
                </Button>
              </Grid>
            </Grid>
          </Container>
        </Box>

      
        {/* Inventory Section */}
        <Container sx={{ mt: 4 }}>
          <Grid container spacing={4}>
            {/* Inventory Form */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: '#fff', boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  Add/Update Product
                </Typography>
                <TextField
                  label="Product Name"
                  fullWidth
                  margin="normal"
                  value={product.name}
                  onChange={(e) => setProduct({ ...product, name: e.target.value })}
                  variant="outlined"
                />
                <TextField
                  label="Stock"
                  type="number"
                  fullWidth
                  margin="normal"
                  value={product.stock}
                  onChange={(e) => setProduct({ ...product, stock: e.target.value })}
                  variant="outlined"
                />
                <TextField
                  label="Expiration Date"
                  type="date"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  value={product.expiration}
                  onChange={(e) => setProduct({ ...product, expiration: e.target.value })}
                  variant="outlined"
                />
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddCircle />}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Add Product
                </Button>
              </Paper>
            </Grid>

            {/* Inventory List with Search, Sort, and Filters */}
            <Grid item xs={12} md={6}>
              <Paper sx={{ p: 3, backgroundColor: '#fff', boxShadow: 3, borderRadius: 2 }}>
                <Typography variant="h5" gutterBottom align="center" sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                  Inventory
                </Typography>
                
                <TextField
                  label="Search Products"
                  fullWidth
                  margin="normal"
                  value={searchTerm}
                  onChange={handleSearch}
                  variant="outlined"
                  InputProps={{
                    endAdornment: (
                      <IconButton>
                        <Search />
                      </IconButton>
                    ),
                  }}
                />

                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Sort By</InputLabel>
                  <Select
                    value={sortCriteria}
                    onChange={handleSortChange}
                    label="Sort By"
                  >
                    <MenuItem value="name">Name</MenuItem>
                    <MenuItem value="stock">Stock</MenuItem>
                    <MenuItem value="expiration">Expiration Date</MenuItem>
                  </Select>
                </FormControl>

                <List sx={{ maxHeight: 300, overflowY: 'auto', mt: 2, border: '1px solid #ddd', borderRadius: 2 }}>
                  {filteredInventory.map(item => (
                    <ListItem
                      key={item.id}
                      sx={{
                        mb: 1,
                        p: 2,
                        borderRadius: 2,
                        boxShadow: 2,
                        bgcolor: item.stock < 10 ? '#ffe0e0' : '#f5f5f5',
                        transition: 'background-color 0.3s ease',
                        '&:hover': {
                          bgcolor: item.stock < 10 ? '#ffcdd2' : '#e0e0e0',
                        },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography variant="body1" sx={{ fontWeight: 500 }}>
                            {item.name}
                          </Typography>
                        }
                        secondary={
                          <>
                            <Typography variant="body2" color="textSecondary">
                              Stock: {item.stock}
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                              Expires: {item.expiration}
                            </Typography>
                          </>
                        }
                      />
                      <IconButton
                        onClick={() => handleDeleteProduct(item.id)}
                        color="secondary"
                        sx={{ ml: 2 }}
                      >
                        <Delete />
                      </IconButton>
                    </ListItem>
                  ))}
                </List>
              </Paper>
            </Grid>
          </Grid>
        </Container>

        

        <Snackbar
          open={lowStockAlert}
          onClose={closeAlert}
          autoHideDuration={3000}
          message="Low stock alert!"
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        />
      </div>
    </ThemeProvider>
  );
}

export default Inventory;


