const router = require('express').Router();

const Users = require('./user-model.js');

router.get('/', (req, res) => {
    let department = req.decodedToken.department
    Users.findByDepartment(department)
        .then(users => {
            res.json({users});
        })
        .catch(err => res.send(err));
});

module.exports = router;