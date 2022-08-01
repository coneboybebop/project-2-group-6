const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Zipcode } = require('../models');

router.get('/:id', (req, res) => {
    Post.findAll({
        attributes: [
            'id',
            'post_content',
            'category',
            'user_id',
            'zip_id'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('regional', { posts, loggedIn: true });
});
});

module.exports = router;