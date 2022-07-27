const router = require('express').Router();
const { User, Post, Zipcode } = require('../../models');
const sequelize = require('../../config/connection');

router.get('/', (req, res) => {
    Zipcode.findAll({
        include: [
            {
                model: Post,
                attributes: ['id','post_content','category','user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbZipcodeData => res.json(dbZipcodeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Zipcode.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: Post,
                attributes: ['id','post_content','category','user_id'],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbZipcodeData => {
        if (!dbZipcodeData) {
            res.status(404).json({ message: 'This Zipcode is not in the database' });
            return;
        }
        res.json(dbZipcodeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    }); 
});

router.post('/', (req, res) => {
    Zipcode.create({
        zipcode: req.body.zipcode
    })
    .then(dbZipcodeData => res.json(dbZipcodeData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Zipcode.destroy({
        where: {
            id: req.params.id
        }
    })
    .then(dbZipcodeData => {
        if (!dbZipcodeData) {
            res.status(404).json({ message: 'Zipcode not found in database' });
            return;
        }
        res.json(dbZipcodeData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;