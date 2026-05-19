import { useState, useEffect } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArticleIcon from '@mui/icons-material/Article';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import {
  createArticle,
  deleteArticle,
  fetchArticles,
  updateArticle,
} from '../../services/ArticleService';

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
  maxHeight: '90vh',
  overflowY: 'auto',
};

const DashArticleListPage = () => {
  const [open, setOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editArticleId, setEditArticleId] = useState(null);
  const [articlesList, setArticlesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [newArticle, setNewArticle] = useState({
    name: '',
    title: '',
    category: '',
    description: '',
    image: '',
    content: '',
  });

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setLoading(true);
      const { data } = await fetchArticles();
      setArticlesList(data?.articles || []);
    } catch (error) {
      console.error('Error fetching articles:', error);
      alert(error.response?.data?.message || 'Error fetching articles');
    } finally {
      setLoading(false);
    }
  };

  const handleOpen = () => {
    setIsEditing(false);
    setNewArticle({
      name: '',
      title: '',
      category: '',
      description: '',
      image: '',
      content: '',
    });
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setIsEditing(false);
    setEditArticleId(null);
  };

  const handleEdit = (id) => {
    const articleToEdit = articlesList.find((article) => article._id === id);
    if (articleToEdit) {
      setNewArticle({
        name: articleToEdit.name,
        title: articleToEdit.title,
        category: articleToEdit.category,
        description: articleToEdit.description,
        image: articleToEdit.image || '',
        content: Array.isArray(articleToEdit.content) ? articleToEdit.content.join('\n') : articleToEdit.content,
      });
      setEditArticleId(id);
      setIsEditing(true);
      setOpen(true);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
      try {
        await deleteArticle(id);
        setArticlesList(articlesList.filter((article) => article._id !== id));
      } catch (error) {
        console.error('Error deleting article:', error);
        alert(error.response?.data?.message || 'Error deleting article');
      }
    }
  };

  const handleSaveArticle = async () => {
    try {
      if (!newArticle.title || !newArticle.name || !newArticle.category) {
        alert('Please fill in all required fields');
        return;
      }

      if (isEditing) {
        const { data } = await updateArticle(editArticleId, newArticle);
        const updatedArticles = articlesList.map((article) =>
          article._id === editArticleId ? data : article
        );
        setArticlesList(updatedArticles);
      } else {
        const { data } = await createArticle(newArticle);
        setArticlesList([data, ...articlesList]);
      }
      handleClose();
    } catch (error) {
      console.error('Error saving article:', error);
      alert(error.response?.data?.message || 'Error saving article');
    }
  };

  const columns = [
    { field: 'title', headerName: 'Title', flex: 2 },
    { field: 'name', headerName: 'Name', flex: 1 },
    { field: 'category', headerName: 'Category', flex: 1 },
    { field: 'description', headerName: 'Description', flex: 2 },
    {
      field: 'actions',
      headerName: 'Actions',
      flex: 1,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', pt: 1 }}>
          <Button
            variant="contained"
            size="small"
            onClick={() => handleEdit(params.row._id)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            size="small"
            startIcon={<DeleteIcon />}
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  const categories = [...new Set(articlesList.map((article) => article.category).filter(Boolean))];
  const filteredArticles = articlesList.filter((article) => {
    const searchValue = searchTerm.toLowerCase();
    const matchesSearch =
      !searchValue ||
      article.title?.toLowerCase().includes(searchValue) ||
      article.name?.toLowerCase().includes(searchValue) ||
      article.description?.toLowerCase().includes(searchValue) ||
      article.category?.toLowerCase().includes(searchValue);
    const matchesCategory = categoryFilter === 'all' || article.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <Box sx={{ p: 3 }}>
      <Stack
        direction="row"
        sx={{
          marginBottom: 5,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h2" fontWeight="bold">
          Articles
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleOpen}
          sx={{ position: 'fixed', right: '20px', top: '100px', zIndex: 1000 }}
        >
          Add Article
        </Button>
      </Stack>

      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={2}
        sx={{ mb: 2, bgcolor: 'background.paper', p: 2 }}
      >
        <TextField
          label="Search articles"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ flex: 1 }}
        />

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Category</InputLabel>
          <Select
            label="Category"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <MenuItem value="all">All categories</MenuItem>
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Stack>

      <Modal open={open} onClose={handleClose}>
        <Box sx={modalStyle}>
          <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
            {isEditing ? 'Edit Article' : 'Add Article'}
          </Typography>

          <Stack spacing={2}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', mb: 2 }}>
              <ArticleIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                fullWidth
                label="Title *"
                variant="standard"
                value={newArticle.title}
                onChange={(e) =>
                  setNewArticle({ ...newArticle, title: e.target.value })
                }
              />
            </Box>

            <TextField
              fullWidth
              label="Article Name (slug) *"
              variant="standard"
              value={newArticle.name}
              onChange={(e) =>
                setNewArticle({
                  ...newArticle,
                  name: e.target.value.toLowerCase().replace(/\s+/g, '-'),
                })
              }
            />

            <FormControl fullWidth variant="standard">
              <InputLabel>Category *</InputLabel>
              <Select
                value={newArticle.category}
                onChange={(e) =>
                  setNewArticle({ ...newArticle, category: e.target.value })
                }
              >
                <MenuItem value="Action">Action</MenuItem>
                <MenuItem value="Survival">Survival</MenuItem>
                <MenuItem value="Horror">Horror</MenuItem>
                <MenuItem value="RPG">RPG</MenuItem>
                <MenuItem value="Adventure">Adventure</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>

            <TextField
              fullWidth
              label="Description"
              variant="standard"
              multiline
              rows={2}
              value={newArticle.description}
              onChange={(e) =>
                setNewArticle({ ...newArticle, description: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Image URL"
              variant="standard"
              value={newArticle.image}
              onChange={(e) =>
                setNewArticle({ ...newArticle, image: e.target.value })
              }
            />

            <TextField
              fullWidth
              label="Content (one paragraph per line)"
              variant="standard"
              multiline
              rows={4}
              value={newArticle.content}
              onChange={(e) =>
                setNewArticle({ ...newArticle, content: e.target.value })
              }
            />

            <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
              <Button variant="outlined" onClick={handleClose} fullWidth>
                Cancel
              </Button>
              <Button variant="contained" onClick={handleSaveArticle} fullWidth>
                {isEditing ? 'Save Changes' : 'Add'}
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Modal>

      <Box sx={{ height: 500, width: '100%', bgcolor: 'background.paper' }}>
        <DataGrid
          rows={filteredArticles}
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

export default DashArticleListPage;
