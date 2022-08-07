const router = require('express').Router();
const { User, Post, Zipcode } = require('../../models');
const zipcodes = require('zipcodes');

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

router.get('/:zipcode', (req, res) => {
    Zipcode.findOne({
        where: {
            zipcode: req.params.zipcode
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
            Zipcode.create({
                zipcode: req.params.zipcode,
                city_name: zipcodes.lookup(req.params.zipcode).city
            })
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
        zipcode: req.body.zipcode,
        city_name: zipcodes.lookup(req.body.zipcode).city
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