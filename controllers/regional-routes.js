const router = require('express').Router();
const sequelize = require('../config/connection');
const {Post, User, Zipcode } = require('../models');

router.get('/:zipcode', (req, res) => {
    Zipcode.findAll({
        where: {
            zipcode: req.params.zipcode
        },
        attributes: [
            'id',
            'zipcode',
            'city_name'
        ],
        include: [
            {
                model: Post,
                attributes: ['id', 'post_content', 'category', 'user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbPostData => {
        // serialize data before passing to template
        const posts = dbPostData.map(post => post.get({ plain: true }));
        res.render('regional', { posts, loggedIn: req.session.loggedIn});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;