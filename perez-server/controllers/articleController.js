const Article = require('../models/Article');

const normalizeParagraphs = (value) => {
    if (Array.isArray(value)) {
        return value.map((paragraph) => String(paragraph).trim()).filter(Boolean);
    }

    if (typeof value === 'string') {
        return value.split('\n').map((paragraph) => paragraph.trim()).filter(Boolean);
    }

    return [];
};

const normalizeArticleBody = (body) => {
    const content = normalizeParagraphs(body.content);
    const paragraphs = normalizeParagraphs(body.paragraphs);

    return {
        ...body,
        name: body.name?.trim().toLowerCase().replace(/\s+/g, '-'),
        content,
        paragraphs: paragraphs.length ? paragraphs : content
    };
};

const getArticles = async (req, res) => {
    try {
        const articles = await Article.find({}).sort({ createdAt: -1 });
        res.json({ articles });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getArticleByName = async (req, res) => {
    try {
        const article = await Article.findOne({ name: req.params.name });

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.json(article);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const createArticle = async (req, res) => {
    try {
        const articleData = normalizeArticleBody(req.body);

        if (!articleData.title || !articleData.name || !articleData.category) {
            return res.status(400).json({ message: 'Title, name, and category are required' });
        }

        const articleExists = await Article.findOne({ name: articleData.name });
        if (articleExists) {
            return res.status(400).json({ message: 'Article name is already taken' });
        }

        const article = await Article.create(articleData);
        res.status(201).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateArticle = async (req, res) => {
    try {
        const articleData = normalizeArticleBody(req.body);

        if (articleData.name) {
            const duplicate = await Article.findOne({
                name: articleData.name,
                _id: { $ne: req.params.id }
            });

            if (duplicate) {
                return res.status(400).json({ message: 'Article name is already taken' });
            }
        }

        const article = await Article.findByIdAndUpdate(req.params.id, articleData, {
            new: true,
            runValidators: true
        });

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteArticle = async (req, res) => {
    try {
        const article = await Article.findByIdAndDelete(req.params.id);

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.json({ message: 'Article deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getArticles,
    getArticleByName,
    createArticle,
    updateArticle,
    deleteArticle
};
