import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  FormHelperText,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircle from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { fetchUsers, createUser, updateUser, deleteUser } from '../../services/UserService'; 

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const UsersPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editUserId, setEditUserId] = useState(null);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [roleFilter, setRoleFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [newUser, setNewUser] = useState({
    firstName: '',
    lastName: '',
    age: '',
    gender: '',
    contactNumber: '',
    email: '',
    username: '',
    password: '',
    address: '',
    type: 'viewer',
    isActive: true,
    confirmPassword: '', // Add for client-side password confirmation
  });

  const loadUsers = async () => {
    try {
      setLoading(true);
      const { data } = await fetchUsers();
      setUsers(data?.users || []);
    } catch (error) {
      console.error('Error fetching users:', error);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleOpen = () => {
    setIsEditing(false);
    setNewUser({
      firstName: '', lastName: '', age: '', gender: '',
      contactNumber: '', email: '', username: '',
      password: '', address: '', type: 'viewer', isActive: true,
    });
    setFormErrors({}); // Clear errors on open
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditUserId(null);
  };
  const [formErrors, setFormErrors] = useState({});

  const handleEdit = (id) => {
    const userToEdit = users.find((user) => user._id === id);
    if (userToEdit) {
      setNewUser({ ...userToEdit, password: '' });
      setEditUserId(id);
      setIsEditing(true);
      setFormErrors({}); // Clear errors on edit
      setOpen(true);
    }
  };

  const validateForm = () => {
    let errors = {};
    if (!newUser.firstName) errors.firstName = 'First Name is required';
    if (!newUser.lastName) errors.lastName = 'Last Name is required';
    if (!newUser.username) errors.username = 'Username is required';
    if (!newUser.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(newUser.email)) {
      errors.email = 'Email address is invalid';
    }
    if (!newUser.type) errors.type = 'User Type is required';

    if (!newUser.gender) errors.gender = 'Gender is required';
    if (!newUser.age) errors.age = 'Age is required';
    if (!newUser.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!newUser.address) errors.address = 'Address is required';

    // Password validation for new users or if password is being changed
    if (!isEditing || newUser.password) {
      if (!newUser.password) {
        errors.password = 'Password is required';
      } else if (newUser.password.length < 6) {
        errors.password = 'Password must be at least 6 characters';
      }
      if (newUser.password !== newUser.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSaveUser = async () => {
    try {
      if (!validateForm()) {
        return; // Stop if validation fails
      }

      if (isEditing) {
        const updatedUser = { ...newUser };
        if (!updatedUser.password) {
          delete updatedUser.password;
        }
        await updateUser(editUserId, updatedUser);
      } else {
        await createUser(newUser);
      }
      loadUsers();
      handleClose();
    } catch (error) {
      console.error('Error saving user:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        await deleteUser(id);
        loadUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
        alert(error.response?.data?.message || 'Error deleting user');
      }
    }
  };

  const columns = [
    { field: 'name', headerName: 'Name', flex: 1, 
      valueGetter: (value, row) => `${row?.firstName || ''} ${row?.lastName || ''}` 
    },
    { field: 'age', headerName: 'Age', flex: 1 },
    { field: 'gender', headerName: 'Gender', flex: 1 },
    { field: 'email', headerName: 'Email', flex: 1 },
    { field: 'type', headerName: 'Type', flex: 1 },
    { field: 'contactNumber', headerName: 'Contact', flex: 1 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pt: 1 }}>
          <Button variant="contained" size="small" onClick={() => handleEdit(params.row?._id || params.id)}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row?._id || params.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const filteredUsers = users.filter((user) => {
    const searchValue = searchTerm.toLowerCase();
    const fullName = `${user.firstName || ''} ${user.lastName || ''}`.toLowerCase();
    const matchesSearch =
      !searchValue ||
      fullName.includes(searchValue) ||
      user.email?.toLowerCase().includes(searchValue) ||
      user.username?.toLowerCase().includes(searchValue) ||
      user.contactNumber?.toLowerCase().includes(searchValue);
    const matchesRole = roleFilter === 'all' || user.type === roleFilter;
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'active' && user.isActive) ||
      (statusFilter === 'inactive' && !user.isActive);

    return matchesSearch && matchesRole && matchesStatus;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Stack direction="row" sx={{ marginBottom: 5, justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h2" fontWeight="bold">Users</Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
        >
          Add User
        </Button>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ mb: 2, bgcolor: 'background.paper', p: 2 }}
      >
        <TextField
          label="Search users"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1 }}
        />

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Role</InputLabel>
          <Select
            label="Role"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <MenuItem value="all">All roles</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="editor">Editor</MenuItem>
            <MenuItem value="viewer">Viewer</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Status</InputLabel>
          <Select
            label="Status"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <MenuItem value="all">All statuses</MenuItem>
            <MenuItem value="active">Active</MenuItem>
            <MenuItem value="inactive">Inactive</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            {isEditing ? 'Edit User' : 'Add User'}
          </Typography>
          
          <Stack spacing={2}>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
                fullWidth label="First Name" variant="standard"
                value={newUser.firstName}
                onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
                error={!!formErrors.firstName}
                helperText={formErrors.firstName}
              />
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField 
                fullWidth label="Last Name" variant="standard"
                value={newUser.lastName}
                onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
                error={!!formErrors.lastName}
                helperText={formErrors.lastName}
              />
            </Box>

            <TextField 
              fullWidth label="Username" variant="standard"
              value={newUser.username}
              onChange={(e) => setNewUser({ ...newUser, username: e.target.value })}
              error={!!formErrors.username}
              helperText={formErrors.username}
            />

            <Stack direction="row" spacing={2}>
               <FormControl fullWidth variant="standard" error={!!formErrors.gender}>
                <InputLabel>Gender</InputLabel>
                <Select
                  value={newUser.gender}
                  onChange={(e) => setNewUser({ ...newUser, gender: e.target.value })}
                >
                  <MenuItem value="Male">Male</MenuItem>
                  <MenuItem value="Female">Female</MenuItem>
                </Select>
                {formErrors.gender && <FormHelperText>{formErrors.gender}</FormHelperText>}
              </FormControl>

              <FormControl fullWidth variant="standard" error={!!formErrors.type}>
                <InputLabel>Type</InputLabel>
                <Select
                  value={newUser.type}
                  onChange={(e) => setNewUser({ ...newUser, type: e.target.value })}
                >
                  <MenuItem value="admin">Admin</MenuItem>
                  <MenuItem value="editor">Editor</MenuItem>
                  <MenuItem value="viewer">Viewer</MenuItem>
                </Select>
                {formErrors.type && <FormHelperText>{formErrors.type}</FormHelperText>}
              </FormControl>
            </Stack>

            <Stack direction="row" spacing={2}>
              <TextField 
                fullWidth label="Age" variant="standard" type="number"
                value={newUser.age}
                onChange={(e) => setNewUser({ ...newUser, age: e.target.value })}
                error={!!formErrors.age}
                helperText={formErrors.age}
              />
              <TextField 
                fullWidth label="Contact Number" variant="standard"
                value={newUser.contactNumber}
                onChange={(e) => setNewUser({ ...newUser, contactNumber: e.target.value })}
                error={!!formErrors.contactNumber}
                helperText={formErrors.contactNumber}
              />
            </Stack>

            <TextField 
              fullWidth label="Address" variant="standard"
              value={newUser.address}
              onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
              error={!!formErrors.address}
              helperText={formErrors.address}
            />

            <TextField 
              fullWidth label="Email" variant="standard"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
              error={!!formErrors.email}
              helperText={formErrors.email}
            />

            <TextField 
              fullWidth label="Password" variant="standard" type="password"
              value={newUser.password}
              onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
              error={!!formErrors.password}
              helperText={formErrors.password}
            />
            <TextField 
              fullWidth label="Confirm Password" variant="standard" type="password"
              value={newUser.confirmPassword}
              onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
              error={!!formErrors.confirmPassword}
              helperText={formErrors.confirmPassword}
            />

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleClose} fullWidth>Cancel</Button>
              <Button variant="contained" onClick={handleSaveUser} fullWidth>
                {isEditing ? 'Save Changes' : 'Add'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <Box sx={{ height: 500, width: '100%', bgcolor: 'background.paper' }}>
        <DataGrid
          rows={filteredUsers}
          columns={columns}
          getRowId={(row) => row._id} 
          loading={loading}
          pageSizeOptions={[10, 20, 50]}
          disableRowSelectionOnClick
        />
      </Box>
    </Box>
  );
};

export default UsersPage;
