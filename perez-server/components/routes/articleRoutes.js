const express = require('express');
const {
    getArticles,
    getArticleByName,
    createArticle,
    updateArticle,
    deleteArticle
} = require('../controllers/articleController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/slug/:name', getArticleByName);
router.route('/').get(getArticles).post(protect, admin, createArticle);
router.route('/:id').put(protect, admin, updateArticle).delete(protect, admin, deleteArticle);

module.exports = router;
