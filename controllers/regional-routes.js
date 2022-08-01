const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Zipcode } = require('../models');

<<<<<<< HEAD
router.get('/:id', (req, res) => {
    Post.findAll({
        where: {
            zip_id: req.params.id
        },
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
=======
router.get('/', (req, res) => {
    

    res.render('regional');
>>>>>>> 6bf743c7afd8feafd050e45fe6c4c5c8e2c4e0dc
});

module.exports = router;