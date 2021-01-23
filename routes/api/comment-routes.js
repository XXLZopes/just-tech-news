const router = require ('express').Router();
const { Comment } = require('../../models');

router.get('/', (req, res) => {
    Comment.findAll({})
    .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.post('/', (req, res) => {
    Comment.create({
        comment_text: req.body.comment_text,
        user_id: req.body.user_id,
        post_id: req.body.user_id
    })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
        console.log(err);
        res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
    .then((dbPostData) => {
        if (!dbPostData) {
            res.status(404).json({ message: 'No comment with that id found' });
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;