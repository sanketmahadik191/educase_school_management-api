const db = require('../config/database');

const addSchool = (school, callback) => {
    const query = 'INSERT INTO school_management_system (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
    db.query(query, [school.name, school.address, school.latitude, school.longitude], callback);
};

const getAllSchools = (callback) => {
    const query = 'SELECT * FROM school_management_system';
    db.query(query, callback);
};

module.exports = { addSchool, getAllSchools };
