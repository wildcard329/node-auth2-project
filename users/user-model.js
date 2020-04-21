const db = require('../database/dbconfig.js');

module.exports = {
    add,
    find,
    findBy,
    findByID
};

function find() {
    return db('users').select('id', 'username', 'password');
};

function findBy(filter) {
    return db('users').where(filter);
};

function findBy(id) {
    return db('users').where({id}).first();
};

async function add(user) {
    const [id] = await db('users').insert(user, 'id');

    return findByID(id);
};