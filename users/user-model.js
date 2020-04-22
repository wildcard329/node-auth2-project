const db = require('../database/dbconfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    findByDepartment
};

function find() {
    return db('users').select('id', 'username', 'password', 'department');
};

function findBy(filter) {
    return db('users').where(filter);
};

function findByDepartment(department) {
    return db('users').where({department}).select('id', 'username', 'department');
};

function findById(id) {
    return db('users').where({id}).first();
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return findById(id);
};