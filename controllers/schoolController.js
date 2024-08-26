const School = require('../models/schoolModel');

const addSchool = (req, res) => {
    const { name, address, latitude, longitude } = req.body;

    if (!name || !address || !latitude || !longitude) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newSchool = { name, address, latitude, longitude };

    School.addSchool(newSchool, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to add school', error: err });
        }
        res.status(201).json({ message: 'School added successfully', schoolId: result.insertId });
    });
};

const listSchools = (req, res) => {
    const { latitude, longitude } = req.query;

    if (!latitude || !longitude) {
        return res.status(400).json({ message: 'Latitude and longitude are required' });
    }

    // Convert float 
    const userLat = parseFloat(latitude);
    const userLon = parseFloat(longitude);

    School.getAllSchools((err, schools) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch schools', error: err });
        }

        //Haversine formula to calculate distance
        const calculateDistance = (lat1, lon1, lat2, lon2) => {
            const toRad = (value) => (value * Math.PI) / 180;
            const R = 6371;

            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a =
                Math.sin(dLat) * Math.sin(dLat) +
                Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon) * Math.sin(dLon);
            return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        };

        // Sorting
        schools.sort((a, b) => 
            calculateDistance(userLat, userLon, a.latitude, a.longitude) -
            calculateDistance(userLat, userLon, b.latitude, b.longitude)
        );

        res.json(schools);
    });
};

module.exports = { addSchool, listSchools };
